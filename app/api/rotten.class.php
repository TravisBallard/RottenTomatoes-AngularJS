<?php

	class Rotten
	{
		const API_BASE_URL = 'http://api.rottentomatoes.com/api/public/v1.0/';
		const API_KEY = 'rvvdmt8tuucay37dadk8gza7';

		private $results_per_page = 100;
		private $result_limit = 2;//50;
		private $country = 'us';

		private $current_results_page = 1;

		/**
		 * Magics
		 */
		public function __construct()
		{

		}

		/**
		 * Get current movies that are playing in the box office.
		 *
		 * @param bool|true $json_decode
		 * @return object
		 */
		public function get_movies_in_box_office($json_decode = true)
		{
			$movies = self::get( self::build_api_url(
				'lists/movies/box_office.json', array(
					'limit' => $this->result_limit,
					'country' => $this->country
				)
			), $json_decode );

			return $json_decode ? (object)$movies['movies'] : $movies;
		}

		/**
		 * Search for movies
		 *
		 * @param $searching_for
		 */
		public function search_movies( $searching_for )
		{

		}

		/**
		 * Build the api url
		 *
		 * @param $endpoint
		 * @param array $args
		 */
		public static function build_api_url( $endpoint, $args = array() )
		{
			$args = array_merge( $args, array( 'apikey' => self::API_KEY ) );
			return self::API_BASE_URL . $endpoint . '?' . http_build_query( $args );
		}

		/**
		 * Fetch data from url
		 *
		 * @param $endpoint
		 * @param bool|true $json_decode
		 * @return mixed
		 */
		public static function get( $endpoint, $json_decode = true )
		{
			$ch = curl_init( $endpoint );
			curl_setopt( $ch, CURLOPT_HEADER, 0 );
			curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
			$result = curl_exec( $ch );
			curl_close( $ch );

			return $json_decode ? json_decode( $result, true ) : $result;
		}

		/**
		 * Strip the flixter url from the thumbnail url so we can get the original.
		 *
		 * @param $thumb_url
		 * @return mixed
		 */
		public static function strip_flixster( $thumb_url )
		{
			return preg_replace( '/resizing.flixster.com\/.*?\/.*?\//sim', '', $thumb_url );
		}

		/**
		 * Convert the runtime minutes to a "n Hour(s) n Minute(s)"
		 *
		 * @param $mins
		 * @return string
		 */
		public static function format_runtime($mins)
		{
			$hours = floor( intval( $mins ) / 60 );
			$hours_label = $hours > 1 ? 'Hours' : 'Hour';

			$minutes = ( $mins % 60 );
			$minutes_label = $minutes > 1 ? 'Minutes' : 'Minute';

			return sprintf(
				'%s %s',
				$hours == 0 ?
					'' :
					sprintf( '%d %s', $hours, $hours_label ),

				$minutes == 0 ?
					'' :
					sprintf( '%d %s', $minutes, $minutes_label ) );
		}

	}