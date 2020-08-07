//Travel Flow Bar Chart	

// Initialize the chart	
		var ctx = document.getElementById("myChart").getContext("2d");

		var myBarChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Top1", "Top2", "Top3", "Top4", "Top5", "Top6","Top7","Top8","Top9","Top10"],
				datasets: [{
					label: 'Total EI Trips',
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					backgroundColor: [
						'rgba(24, 116, 205, 0.2)',
						'rgba(24, 116, 205, 0.2)',
						'rgba(24, 116, 205, 0.2)',
						'rgba(24, 116, 205, 0.2)',
						'rgba(24, 116, 205, 0.2)',
						'rgba(24, 116, 205, 0.2)',
						'rgba(24, 116, 205, 0.2)',
						'rgba(24, 116, 205, 0.2)',
						'rgba(24, 116, 205, 0.2)',
						'rgba(24, 116, 205, 0.2)'
					],
					borderColor: [
						'rgba(24, 116, 205, 1)',
						'rgba(24, 116, 205, 1)',
						'rgba(24, 116, 205, 1)',
						'rgba(24, 116, 205, 1)',
						'rgba(24, 116, 205, 1)',
						'rgba(24, 116, 205, 1)',
						'rgba(24, 116, 205, 1)',
						'rgba(24, 116, 205, 1)',
						'rgba(24, 116, 205, 1)',
						'rgba(24, 116, 205, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
			
