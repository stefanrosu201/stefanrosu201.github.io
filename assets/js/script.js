function computeMoment(workExpId, startDate, endDate) {

    startDate = moment(startDate);
    if (endDate != undefined) {
        endDate = moment(endDate);
    }
    var duration = moment.preciseDiff(startDate, endDate, true);
    var jsonData = JSON.stringify(duration);
    jsonData = JSON.parse(jsonData);

    var timeToShow = "";
    var jsonYears = jsonData.years;
    var jsonMonths = parseInt(jsonData.months);
//
    if (jsonYears != 0) {
        if (parseInt(jsonYears) < 2) {
            timeToShow = timeToShow + jsonYears + " year ";
        } else {
            timeToShow = timeToShow + jsonYears + " years ";
        }
    }
    if (jsonMonths != 0) {
        if (jsonMonths < 2) {
            timeToShow = timeToShow + (jsonMonths) + " month ";
        } else {
            timeToShow = timeToShow + (jsonMonths) + " months ";
        }
    }

    document.getElementById(workExpId).innerHTML = document.getElementById(workExpId).innerHTML + " ( " + timeToShow + " ) ";

}


