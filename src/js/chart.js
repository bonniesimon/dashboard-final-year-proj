const ctx = document.getElementById("myChart");

let data = [], labels = [];

const convertTextToNumArray = (string) => {
	const numString = string.replace( /\r\n/g, " " ).replace(/\r/g, " ").split(" ");
	const nums = numString.map(item => Number(item));
	return nums;
}

const timeseriesChartCtx = document.getElementById("timeseries-chart");
document.getElementById("filetoRead").addEventListener("change",function(){
	var file = this.files[0];

	if (file) {
		var reader = new FileReader();
		
		reader.onload = function (evt) {
			data = [...data, convertTextToNumArray(evt.target.result)];

			const datasets1 = [{
				label: 'Dataset 1',
				data: convertTextToNumArray(evt.target.result), // Y Axis
			}]

			const data1 = {
				labels: [...Array(convertTextToNumArray(evt.target.result).length)].map((a, b) => b), // X Axis
				datasets: datasets1 
			}

			const myTimeseriesChart = new Chart(timeseriesChartCtx, {
				type: 'line',
				data: data1,
				options: {
				responsive: true,
				plugins: {
					legend: {
					position: 'top',
					},
					title: {
					display: true,
					text: 'Chart.js Line Chart'
					}
				}
				},
			})
		};

		reader.onerror = function (evt) {
			console.error("An error ocurred reading the file",evt);
		};

		reader.readAsText(file, "UTF-8");
	}
},false);


// console.log(data);
// const labels = ["Alpha", "Beta", "Delta", "Gamma", "Theta"] // X axis
// const datasets = [{
// 	label: "Mean Band Amplitute",
// 	data: [42692.993502, 	15103.204440, 	88473.312110, 	3880.282604,	55976.578362], // Y Axis
// 	data: data,
// 	backgroundColor: [
// 		'rgba(255, 99, 132, 0.2)',
// 		'rgba(255, 159, 64, 0.2)',
// 		'rgba(255, 205, 86, 0.2)',
// 		'rgba(75, 192, 192, 0.2)',
// 		'rgba(54, 162, 235, 0.2)',
// 	  ],
// 	borderColor: [
// 	'rgb(255, 99, 132)',
// 	'rgb(255, 159, 64)',
// 	'rgb(255, 205, 86)',
// 	'rgb(75, 192, 192)',
// 	'rgb(54, 162, 235)',
// 	],
// 	borderWidth: 1,
// 	base: 20000
// }]
// const dataset = {
// 	labels: labels,
// 	datasets: datasets,
// }
// const myChart = new Chart(ctx, {
// 	type: 'bar',
// 	data: dataset,
// 	options: {
// 		scales: {
// 			yAxes: [{
// 				ticks: {
// 					beginAtZero: true
// 				}
// 			}]
// 		},
// 		legend: {
// 			display: false,
// 		}
// 	}
// });


// const timeseriesChartCtx = document.getElementById("timeseries-chart");

// const datasets1 = [{
// 	label: 'Dataset 1',
// 	data: [1,2,3,3,6,7,7,4,3], // Y Axis
// }]

// const data1 = {
// 	labels: [1,2,3,4], // X Axis
// 	datasets: datasets1 
// }

// const myTimeseriesChart = new Chart(timeseriesChartCtx, {
// 	type: 'line',
// 	data: data1,
// 	options: {
// 	  responsive: true,
// 	  plugins: {
// 		legend: {
// 		  position: 'top',
// 		},
// 		title: {
// 		  display: true,
// 		  text: 'Chart.js Line Chart'
// 		}
// 	  }
// 	},
//   })
