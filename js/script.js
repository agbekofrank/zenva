window.addEventListener('load', function () {
    const users = [{
        name: 'Lucy',
        gender: 'F',
        age: 11,
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Betty',
        gender: 'F',
        age: 16,
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        age: 14,
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'M',
        age: 15,
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        age: 17,
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        age: 19,
        hobby: 'shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        age: 22,
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
    ];


    var results = document.getElementById('results');

    function search() {

        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;

        var resultsHtml = '';
        var usersLength = users.length;

        const minAgeF = document.getElementById('minAge');
        const maxAgeF = document.getElementById('maxAge');
        let maxAge = maxAgeF.value;
        let minAge = minAgeF.value;

        for (var i = 0; i < usersLength; i++) {
            const output = '<div class="card">\
            <img src="img/' + users[i].avatar + '" class="img"/>\
            <div class="person-info">\
            <div>' + users[i].name + '</div>\
            <div>' + users[i].hobby + '</div>\
            <div>' + users[i].age + '</div>\
            </div>\
             <button class="like">Add as friend</button></div>';
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    // resultsHtml += output
                    if (!minAge || !maxAge) {
                        resultsHtml += output

                    } else if (users[i].age >= minAge && users[i].age <= maxAge) {
                        resultsHtml += output
                    }
                    // resultsHtml += output

                }
            }
        }

        results.innerHTML = resultsHtml;
    }

    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', search);
});