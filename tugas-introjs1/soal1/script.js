const biodata = {
    name: 'Hanif Kumara',
    age: 19,
    hobbies: ['olahraga', 'mendengarkan musik', 'Bermain game'],
    IsMarried: false,
    schoolList: [
        {
            name: 'SDN Ploso 2 Nganjuk',
            yearIn: '2008',
            yearOut: '2014',
            majors: null
        },
        {
            name: 'SMP N 5 Nganjuk',
            yearIn: '2014',
            yearOut: '2016',
            majors: null
        },
        {
            name: 'SMK Muhammadiyah 1 Sukoharjo',
            yearIn: '2017',
            yearOut: '2020',
            majors: 'Rekayasa Perangkat Lunak'
        }
    ],
    skills: [
        {
            skillName: 'HTML',
            level: 'beginner'
        },
        {
            skillName: 'CSS',
            level: 'beginner'
        },
        {
            skillName: 'Javascript',
            level: 'beginner'
        }
    ],
    interestInCoding: true
}

const sekolah = biodata.schoolList[2].name
console.log(sekolah)