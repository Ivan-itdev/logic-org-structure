let depData = [
    {
      ID: "1",
      NAME: "Создаватель",
      UF_HEAD: "1",
      SORT: 500,
    },
    {
      ID: "3",
      NAME: "1. Отдел сайтов и продвижения",
      PARENT: "1",
      UF_HEAD: "19",
      SORT: 500,
    },
    {
      ID: "23",
      NAME: "Отдел маркетинга",
      PARENT: "3",
      SORT: 375,
    },
    {
      ID: "11",
      NAME: "Отдел БУС",
      PARENT: "3",
      UF_HEAD: "21",
      SORT: 125,
    },
    {
      ID: "21",
      NAME: "Отдел CRM",
      PARENT: "3",
      SORT: 200,
    },
    /////////////////////////////
    {
      ID: "99",
      NAME: "Отдел pechenki",
      PARENT: "21",
      SORT: 200,
    },
    {
      ID: "98",
      NAME: "Отдел pechenki2",
      PARENT: "21",
      SORT: 200,
    },
    {
      ID: "100",
      NAME: "Отдел pechenkiOPOPOPOP",
      PARENT: "99",
      SORT: 200,
    },
    {
      ID: "101",
      NAME: "Отдел pechenkiOPOPOPOP2",
      PARENT: "99",
      SORT: 200,
    },
    {
      ID: "105",
      NAME: "Отдел pechenkiOPOPOPOP28908098",
      PARENT: "103",
      SORT: 200,
    },
    {
      ID: "101",
      NAME: "Отдел Kartoshka",
      PARENT: "100",
      SORT: 200,
    },
    {
      ID: "102",
      NAME: "Отдел Kartoshka2",
      PARENT: "100",
      SORT: 200,
    },
    {
      ID: "103",
      NAME: "Отдел Egorka",
      PARENT: "13",
      SORT: 200,
    },
    ///////////////////////////////
    {
      ID: "25",
      NAME: "1.2 Стажеры - менеджеры",
      PARENT: "3",
      SORT: 500,
    },
    {
      ID: "7",
      NAME: "3. Отдел разработки",
      PARENT: "1",
      UF_HEAD: "23",
      SORT: 500,
    },
    {
      ID: "9",
      NAME: "2.1 Удаленно",
      PARENT: "7",
      SORT: 500,
    },
    {
      ID: "27",
      NAME: "2.2 Стажеры разработка",
      PARENT: "7",
      SORT: 500,
    },
    {
      ID: "5",
      NAME: "4. Не в офисе",
      PARENT: "1",
      UF_HEAD: "15",
      SORT: 500,
    },
    {
      ID: "19",
      NAME: "3.1 Передача дел",
      PARENT: "5",
      SORT: 500,
    },
    {
      ID: "17",
      NAME: "5. Центр обучения",
      PARENT: "1",
      UF_HEAD: "1",
      SORT: 500,
    },
    {
      ID: "13",
      NAME: "4.1 Андрей Васильев",
      PARENT: "17",
      UF_HEAD: "29",
      SORT: 500,
    },
    {
      ID: "15",
      NAME: "4.2 Валентин Золотов",
      PARENT: "17",
      UF_HEAD: "35",
      SORT: 500,
    },
  ];
  
  let userData = [
    {
      ID: "1",
      NAME: "Алексей",
      LAST_NAME: "Генеральный",
      UF_DEPARTMENT: [1],
    },
    {
      ID: "7",
      NAME: "Иван",
      LAST_NAME: "Иванов",
      UF_DEPARTMENT: [1],
    },
    {
      ID: "9",
      NAME: "Альберт",
      LAST_NAME: "Городецкий",
      UF_DEPARTMENT: [1, 7],
    },
    {
      ID: "19",
      NAME: "Юлия",
      LAST_NAME: "Мустафина",
      UF_DEPARTMENT: [3],
    },
    {
      ID: "11",
      NAME: "Нина",
      LAST_NAME: "Перечислялкина",
      UF_DEPARTMENT: [3],
    },
    {
      ID: "13",
      NAME: "Мария",
      LAST_NAME: "Считалкина",
      UF_DEPARTMENT: [11],
    },
    {
      ID: "15",
      NAME: "Ольга",
      LAST_NAME: "Продажная",
      UF_DEPARTMENT: [5],
    },
    {
      ID: "17",
      NAME: "Андрей",
      LAST_NAME: "Родионов",
      UF_DEPARTMENT: [5],
    },
    {
      ID: "21",
      NAME: "Надежда",
      LAST_NAME: "Стельникова",
      UF_DEPARTMENT: [11],
    },
    {
      ID: "23",
      NAME: "Денис",
      LAST_NAME: "Важнов",
      UF_DEPARTMENT: [7],
    },
    {
      ID: "25",
      NAME: "Георгий",
      LAST_NAME: "Программистов",
      UF_DEPARTMENT: [7],
    },
    {
      ID: "27",
      NAME: "Анатолий",
      LAST_NAME: "Горелый",
      UF_DEPARTMENT: [9],
    },
    {
      ID: "29",
      NAME: "Екатерина",
      LAST_NAME: "Стрельцова",
      UF_DEPARTMENT: [13],
    },
    {
      ID: "31",
      NAME: "Антонина",
      LAST_NAME: "Григорьева",
      UF_DEPARTMENT: [13],
    },
    {
      ID: "33",
      NAME: "Татьяна",
      LAST_NAME: "Кузнецова",
      UF_DEPARTMENT: [15],
    },
    {
      ID: "35",
      NAME: "Светлана",
      LAST_NAME: "Власова",
      UF_DEPARTMENT: [15],
    },
    {
      ID: "37",
      NAME: "Юлия",
      LAST_NAME: "Никитина",
      UF_DEPARTMENT: [15],
    },
    {
      ID: "39",
      NAME: "Ирина",
      LAST_NAME: "Иванова",
      UF_DEPARTMENT: [15],   //15
    },
  ];
  

// Добавляем нулевой UF_HEAD туда где он отсутствовал
depData.forEach(el => el.UF_HEAD || (el.UF_HEAD = '0'))

const data = JSON.parse(JSON.stringify(depData))
const user = JSON.parse(JSON.stringify(userData))

// Делаем индексную навигацию по отделам и по работникам
const idMapDep = depData.reduce((acc, el, i) => {
  acc[el.ID] = i
  return acc
}, {})
const idMapUser = userData.reduce((acc, el, i) => {
  acc[el.ID] = i
  return acc
}, {})

// Добавляем работников в иерархию
user.forEach(el => {
  el.UF_DEPARTMENT.forEach(e => {
    const parentEl = data[idMapDep[e]] 
    if (parentEl) {
      if (!(parentEl.UF_HEAD && el.ID === parentEl.UF_HEAD)) {
        parentEl.childs = [...(parentEl.childs || []), el]
      }
    }
    
  })
})

// Делаем иерархию отделов и указываем главу отдела
let root
data.forEach(el => {
  if (!el.PARENT) {
    root = el
    root.head = user[idMapUser[el.UF_HEAD]]
    return root
  } 
  const parentEl = data[idMapDep[el.PARENT]]
  const currentEl = el
  currentEl.head = user[idMapUser[el.UF_HEAD]]
  parentEl.childs = [...(parentEl.childs || []), el]
})

// Выводим всё в консоль и сортируем
const display = (obj, prefix = '', lvl = 0, lastId, lastUserLvl1) => {

/// Это условие для вывода работников 1-го уровня
  if (lvl === 1 && obj.LAST_NAME) prefix = lastUserLvl1 ?  prefix.replace(/╠/, '║  ╚') : prefix.replace(/╠/, '║  ╠')

/// Это условие для вывода последнего элемента в массиве
  if (lastId) prefix = prefix.replace(/╠/, '╚')

/// Формируем универсальный шаблон вывода информации в консоль
  let info = prefix + `${obj.NAME} ${obj.LAST_NAME ?
  obj.LAST_NAME :
  obj.head ? `(${obj.head.NAME + ' ' + obj.head.LAST_NAME})` : ''}`

  console.log(info)

/// Проверяем есть ли у текущего объекта дети, если есть то сортируем их, формируем для них префикс и перебераем 
  if (obj.childs) {
    let ch = obj.childs

    ch.sort((a, b) => {
      if (a.SORT === b.SORT) {
        if (a > b) return 1
        if (a < b) return -1
        if (a === b) return 0
      } else {
        return a.SORT - b.SORT
      }
    })

    lvl++
    if (lvl > 1) {
      switch (true) {
        case (/╚/.test(prefix)): prefix = prefix.replace(/╚/, '   ') + '╠'; break
        default: prefix = prefix.replace(/╠/, '║  ') + '╠'
      }
    } else {
      prefix = '╠'
    }
    
    for (let i = 0; i < ch.length; i++) {
      lastId = (i === ch.length - 1) ? ch[i].ID : null
      if (ch[i].LAST_NAME) {
        lastUserLvl1 = (ch[i+1] || {}).LAST_NAME ? false : true
      }
      display(ch[i], prefix, lvl, lastId, lastUserLvl1)
    }
  }
}

display(root)
