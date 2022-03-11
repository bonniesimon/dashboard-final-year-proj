const ctx = document.getElementById("myChart");

const labels = ["Alpha", "Beta", "Delta", "Gamma", "Theta"]
const datasets = [{
	label: "Mean Band Amplitute",
	data: [42692.993502, 	15103.204440, 	88473.312110, 	3880.282604,	55976.578362],
	backgroundColor: [
		'rgba(255, 99, 132, 0.2)',
		'rgba(255, 159, 64, 0.2)',
		'rgba(255, 205, 86, 0.2)',
		'rgba(75, 192, 192, 0.2)',
		'rgba(54, 162, 235, 0.2)',
	  ],
	borderColor: [
	'rgb(255, 99, 132)',
	'rgb(255, 159, 64)',
	'rgb(255, 205, 86)',
	'rgb(75, 192, 192)',
	'rgb(54, 162, 235)',
	],
	borderWidth: 1,
	base: 20000
}]
const data = {
	labels: labels,
	datasets: datasets,
}
const myChart = new Chart(ctx, {
	type: 'bar',
	data: data,
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		legend: {
			display: false,
		}
	}
});