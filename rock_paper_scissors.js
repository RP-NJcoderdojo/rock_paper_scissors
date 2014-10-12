        /* Create the rules for the Game. Separate each rule condition by a ' ' space. Separate each rule by a ',' */
        var rpsStr =
			'paper beats rock,' 	  +
			'paper ties paper,' 	  +
			'paper loses scissors,'   +

			'rock beats scissors,' 	  +
			'rock ties rock,'		  + 
			'rock loses paper,' 	  +

			'scissors beats paper,'   +
			'scissors ties scissors,' +
			'scissors loses rock';

        /* Map a code to a friendly message to show on the screen */
        var rps_Messages =
		{
			'T1':'Tie',
			'T2':'Tie',
			'P1':'Player 1',
			'P2':'Player 2',
		};

