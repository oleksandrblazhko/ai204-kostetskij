
async function signatureAddForm (form_name, description) { //додавання форми для підпису
    if (form_name.length < 50 ) {        //перевірка назви на кількість символів
        return 1;
    } else if ( count <= 0 ) {
        return -1;
    }

    if (description.length > 30 ) {      //перевірка опису на кількість символів
        return 1;
    } else if ( count <= 0 ) {
        return -1;
    }

    if (form_name.length == 1 || description.length == 1 ) { // повідомлення про створення форми, якщо задовольняють обидві умови
        alert("Форму успішно створено")
    } else alert("Інформацію введено невірно")

}


async function showDataAnalytics(req, res) { // переглянути аналітику даних за певним розділом
    try {
        const analytics = await Data.findAll({ //шукаємо всі дані, що стосуються конкретної розділу
            where: {
                section: req.theme.id
            }
        })
        res.status(200).executeSql(sleeps) //повертаємо екземпляри
    } catch (error) {  // якщо щось пішло не так
        errorHandler(res, error) //видаємо помилку
    }
}

