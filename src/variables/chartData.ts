import colors from './colors';

// Example 1 of Chart inside src/views/Index.js (Sales value - Card)
let chartExample1: Record<string, any> = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[900],
            zeroLineColor: colors.gray[900],
          },
          ticks: {
            callback: function (value: number) {
              if (!(value % 10)) {
                return '$' + value + 'k';
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item: any, data: any) {
          var label = data.datasets[item.datasetIndex].label || '';
          var yLabel = item.yLabel;
          var content = '';

          if (data.datasets.length > 1) {
            content += label;
          }

          content += '$' + yLabel + 'k';
          return content;
        },
      },
    },
  },
  data1: () => {
    return {
      labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Performance',
          data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
        },
      ],
    };
  },
  data2: () => {
    return {
      labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Performance',
          data: [0, 20, 5, 25, 10, 30, 15, 40, 40],
        },
      ],
    };
  },
};

// Example 2 of Chart inside src/views/Index.js (Total orders - Card)
let chartExample2: Record<string, any> = {
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value: number) {
              if (!(value % 10)) {
                //return '$' + value + 'k'
                return value;
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item: any, data: any) {
          var label = data.datasets[item.datasetIndex].label || '';
          var yLabel = item.yLabel;
          var content = '';
          if (data.datasets.length > 1) {
            content += label;
          }
          content += yLabel;
          return content;
        },
      },
    },
  },
  data: {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [25, 20, 30, 22, 17, 29],
        maxBarThickness: 10,
      },
    ],
  },
};

export { chartExample1, chartExample2 };
