
const seriesDurations = [
  {
    title: "Betty La Fea",
    days: 9,
    hours: 1,
    minutes: 45,
  },
  {
    title: "Steven Universe",
    days: 1,
    hours: 4,
    minutes: 14,
  },
  {
    title: "Rita",
    days: 1,
    hours: 1,
    minutes: 20,
  },
];

function logOutSeriesText() {
  let totalPercentage = 0;

  for (const series of seriesDurations) {
    const totalMinutes =
      series.days * 24 * 60 +
      series.hours * 60 +
      series.minutes;

    const percentage =
      (totalMinutes / (80 * 365 * 24 * 60)) * 100;

    console.log(
      `${series.title} took ${percentage.toFixed(3)}% of my life`
    );

    totalPercentage += percentage;
  }

  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();
