$(document).ready(function() {
/*	var fourteen_east = ["IND", "MIA", "TOR", "CHI", "WAS", "NJN", "CHA", "ATL", "NYK", "CLE", "DET", "BOS", "ORL", "PHI", "MIL"];
	var fourteen_west = ["SAS", "OKC", "LAC", "HOU", "POR", "GSW", "MEM", "DAL", "PHO", "MIN", "DEN", "NOH", "SAC", "LAL", "UTA"];
	var fourteen_champs = "SAS";
	var thirteen_east = ["MIA", "NYK", "IND", "NJN", "CHI", "ATL", "BOS", "MIL", "PHI", "TOR", "DET", "WAS", "CLE", "CHA", "ORL"];
	var thirteen_west = ["OKC", "SAS", "DEN", "LAC", "MEM", 'GSW', 'LAL', 'HOU', 'UTA', 'DAL', 'POR', 'MIN', 'SAC', 'NOH', 'PHO'];
	var thirteen_champs = "MIA";
	var twelve_east = ['CHI', 'MIA', 'IND', 'BOS', 'ATL', 'ORL', 'NYK', 'PHI', 'MIL', 'DET', 'TOR', 'NJN', 'CLE', 'WAS', 'CHA'];
	var twelve_west = ['SAS', 'OKC', 'LAL', 'MEM', 'LAC', 'DEN', 'DAL', 'UTA', 'HOU', 'PHO', 'POR', 'MIN', 'GSW', 'SAC', 'NOH'];
	var twelve_champs = "MIA";
	var eleven_east = ["CHI", 'MIA', 'BOS', 'ORL', 'ATL', 'NYK', 'PHI', 'IND', 'MIL', 'CHA', 'DET', 'NJN', 'WAS', 'TOR', 'CLE'];
	var eleven_west = ['SAS', 'LAL', 'DAL', 'OKC', 'DEN', 'POR', 'NOH', 'MEM', 'HOU', 'PHO', 'UTA', 'GSW', 'LAC', 'SAC', 'MIN'];
	var eleven_champs = "DAL";
	var ten_east = ['CLE', 'ORL', 'ATL', 'BOS', 'MIA', 'MIL', 'CHA', 'CHI', 'TOR', 'IND', 'NYK', 'DET', 'PHI', 'WAS', 'NJN'];
	var ten_west = ['LAL', 'DAL', 'PHO', 'DEN', 'UTA', 'POR', 'SAS', 'OKC', 'HOU', 'MEM', 'NOH', 'LAC', 'GSW', 'SAC', 'MIN'];
	var ten_champs = "LAL";
	var nine_east = ['CLE', 'BOS', 'ORL', 'ATL', 'MIA', 'PHI', 'CHI', 'DET', 'IND', 'CHA', 'NJN', 'MIL', 'TOR', 'NYK', 'WAS'];
	var nine_west = ['LAL', 'DEN', 'SAS', 'POR', 'HOU', 'DAL', 'NOH', 'UTA', 'PHO', 'GSW', 'MIN', 'MEM', 'OKC', 'LAC', 'SAC'];
	var nine_champs = 'LAL';
	var eight_east = ['BOS', 'DET', 'ORL', 'CLE', 'WAS', 'TOR', 'PHI', 'ATL', 'IND', 'NJN', 'CHI', 'CHA', 'MIL', 'NYK', 'MIA'];
	var eight_west = ['LAL', 'NOH', 'SAS', 'UTA', 'HOU', 'PHO', 'DAL', 'DEN', 'GSW', 'POR', 'SAC', 'LAC', 'MIN', 'MEM', 'SEA'];
	var eight_champs = 'BOS';
	var seven_east = ['DET', 'CLE', 'TOR', 'MIA', 'CHI', 'NJN', 'WAS', 'ORL', 'IND', 'PHI', 'CHA', 'NYK', 'ATL', 'MIL', 'BOS'];
	var seven_west = ['DAL', 'PHO', 'SAS', 'UTA', 'HOU', 'DEN', 'LAL', 'GSW', 'LAC', 'NOH', 'SAC', 'POR', 'MIN', 'SEA', 'MEM'];
	var seven_champs = 'SAS';
	var six_east = ['DET', 'MIA', 'NJN', 'CLE', 'WAS', 'IND', 'CHI', 'MIL', 'PHI', 'ORL', 'BOS', 'TOR', 'CHA', 'ATL', 'NYK'];
	var six_west = ['SAS', 'PHO', 'DEN', 'DAL', 'MEM', 'LAC', 'LAL', 'SAC', 'UTA', 'NOH', 'SEA', 'HOU', 'GSW', 'MIN', 'POR'];
	var six_champs = 'MIA';
	var five_east = ['MIA', 'DET', 'BOS', 'CHI', 'WAS', 'IND', 'PHI', 'NJN', 'CLE', 'ORL', 'TOR', 'NYK', 'MIL', 'CHA', 'ATL'];
	var five_west = ['PHO', 'SAS', 'SEA', 'DAL', 'HOU', 'SAC', 'DEN', 'MEM', 'MIN', 'LAC', 'LAL', 'GSW', 'POR', 'UTA', 'NOH'];
	var five_champs = 'SAS';
	var four_east = ['IND', 'NJN', 'DET', 'MIA', 'NOH', 'MIL', 'NYK', 'BOS', 'CLE', 'TOR', 'PHI', 'ATL', 'WAS', 'CHI', 'ORL'];
	var four_west = ['MIN', 'LAL', 'SAS', 'SAC', 'DAL', 'MEM', 'HOU', 'DEN', 'UTA', 'POR', 'GSW', 'SEA', 'PHO', 'LAC'];
	var four_champs = 'DET' ;*/
 
	var curr_year = 14;


	all_teams = {
		CHI: [false, true, true, true ,false, true, true, true, true, true, true],
		DEN: [true, true, true, true, true, true, true, true, true, true, false],
		ATL: [false, false, false, false, true, true, true, true, true, true, true],
		BOS: [true, true, false, false, true, true, true, true, true, true, false],
		BRK: [true, true, true, true, false, false, false, false, false, true, true],
		CHA: [false, false, false, false, false, false, true, false, false, false, true],
		CLE: [false, false, true, true ,true, true, true, false, false, false, false],
		DAL: [true, true, true, true, true, true, true, true, true, false, true],
		DET: [true, true, true, true, true, true, false, false, false, false, false],
		GSW: [false, false, false, true, false, false, false, false, false, true, true],
		HOU: [true, true, false, true, true, true, false, false, false, true, true],
		IND: [true, true, true, false, false, false, false, true, true, true, true],
		LAC: [false, false, true, false, false, false, false, false, true, true, true],
		LAL: [true, false, true, true, true, true, true, true, true, true, false],
		MEM: [true, true, true, false, false, false, false, true, true, true, true],
		MIA: [true, true, true, true, false, true, true, true, true, true, true],
		MIL: [true, false, true, false, false, false, true, false, false, true, false],
		MIN: [true, false, false, false, false, false, false, false, false, false, false],
		NOP: [true, false, false, false, true, true, false, true, false, false, false],
		NYK: [true, false, false, false, false, false, false, true, true, true, false],
		OKC: [false, true, false, false, false, false, true, true, true, true, true],
		ORL: [false, false, false, true, true, true, true, true, true, false, false],
		PHI: [false, true, false, false, true, true, false, true, true, false, false],
		PHO: [false, true, true, true, true, false, true, false, false, false, false],
		POR: [false, false, false, false, false, true, true, true, false, false, true],
		SAC: [true, true, true, false, false, false, false, false, false, false, false],
		SAS: [true, true, true, true, true, true, true, true, true, true, true],
		TOR: [false, false, false, true, true, false, false, false, false, false, true],
		UTA: [false, false, false, true, true, true, true, false, true, false, false],
		WAS: [false, true, true, true, true, false, false, false, false, false, true]
	};


	$("#right-year").click(function(){
		if($("#curr-year").text() == 2014){
			alert("You are at the latest year!");
		}
		else{
			curr_year = curr_year + 1;
			$("#curr-year").text(2000 + curr_year);
			for (var team in all_teams){
				if (all_teams[team][curr_year - 4] == true){
					$("." + team).css("opacity", 1);
					/*$(".CHI").hide();*/
				}
				else{
					$("." + team).css("opacity", 0.2);
				}
			}


		}

	});
	$("#left-year").click(function(){
		if($("#curr-year").text() == "2004"){
			alert("You are at the earliest year!");
		}
		else{
			
			curr_year = curr_year - 1;
			$("#curr-year").text(2000 + curr_year);
			for (var team in all_teams){
				
				if (all_teams[team][curr_year - 4]){
					$("." + team).css("opacity", 1);
				}
				else{
					$("." + team).css("opacity", 0.2);
				}
			}

		}

	});



});

