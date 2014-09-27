		function get_rand_num(max_plus1){
			return Math.floor(Math.random()*max_plus1);
		}

		function get_random_number(max_plus1){
			return Math.floor(Math.random()*max_plus1);
		}

		function get_rule(rules,item) {
			return rules[item];
		}

		/*
		function check_winner(rule_set,p1,p2){
			var result1 = get_rule(rule_set,p1);

			if (p2 in result1.beats) {
	 			return 'P1'
			}
			if (p2 in result1.loses) {
	 			return 'P2'
			}
			if (p2 in result1.ties) {
				var x = (get_rand_num(2)+1).toString();
				return 'T'+x;
			}
		}
		*/
		
		function check_winner(rule_set,p1,p2){
			var result1 = get_rule(rule_set,p1);
			console.log(result1);
			console.log(result1[p2]);
			if (result1[p2] == 'beats') return 'P1';
			if (result1[p2] == 'loses') return 'P2';
			if (result1[p2] == 'ties') {
				var x = (get_rand_num(2)+1).toString();
				return 'T'+x;
			}
		}


		function __GET(Qlist,key){ 		
			// get query arguments
			var __RET = {};
	   		args = Qlist.substr(1).split(/&/);
			for (var i=0; i<args.length; ++i) {
	    		var tmp = args[i].split(/=/);
	    		if (tmp[0] != "") {
					__RET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
    			}
			}
			return __RET[key];
		}

		function writeoutput(txt){
			document.write(txt + '<br/><br/>');
		}

		function writeMessage(txt){
			document.write(txt + '<br/><br/>');
		}
		
		function createList(inList) {
			return inList.split(/,/);
		}
		
		function goBack(){
			window.history.back();
		}

		function loadRules(inRulesStr) {
			var retRules = {};
			var rules_arr = inRulesStr.split(",");

			for (var i = 0; i < rules_arr.length; i++ ) {
				var rule_arr = rules_arr[i].split(" ");
				if (!retRules[rule_arr[0]]) retRules[rule_arr[0]] = {}; 
				retRules[rule_arr[0]][rule_arr[2]] = rule_arr[1];
			}
			return retRules;
		}
