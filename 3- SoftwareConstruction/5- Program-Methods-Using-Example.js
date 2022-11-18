const DataController = require('../classes')

let analytics = {
    "id": 1,
    "section": "SafetyManagement",
    "state": "Aproved"
} // створюємо дані

await DataController.sendAnalyticsData(analytics)            //надсилаємо до контролеру
const analytics = await DataController.showDataAnalytics(id) // отримуємо аналітику даних
