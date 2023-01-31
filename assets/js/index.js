window.addEventListener('DOMContentLoaded', (event) => {

    var arr = [
                {
                    name: 'Simeon',
                    lastName: 'Nikolov',
                    age: '36',
                    position: 'Junior Front End Developer',
                    ganeder: 'male',
                    avatar: './assets/img/Me.jpg',
                    description: 'Мotivated for new knowledge and development in the field',
                    experience: 'Advance Academy - from September 2021 to the present',
                    study: 'HTML, CSS, Javascript',
                    currently: 'I am currently studying Node.js',
                    previous: 'I have previous experience outside the IT sector',
                },
                {
                    name: 'John',
                    lastName: 'Doe',
                    age: '24',
                    position: 'Junior Back End Engineer',
                    ganeder: 'male',
                    avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"',
                    description: 'Мotivated for new knowledge and development in the field',
                    experience: 'Technical University Varna',
                    study: 'PHP, Java, Python',
                    currently: 'I am currently studying SQL',
                    previous: 'Technical University Varna',
                },
                {
                    name: 'Joahn',
                    lastName: 'Sims',
                    age: '22',
                    position: 'Designer',
                    ganeder: 'female',
                    avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg"',
                    description: 'Мotivated for new knowledge and development in the field',
                    experience: 'Technical University Sofia',
                    study: 'Affinity Designer, Photoshop',
                    currently: 'I am currently studying Photo and Publisher',
                    previous: 'Technical University Sofia',				
                },
                {
                    name: 'Alex',
                    lastName: 'Jamson',
                    age: '28',
                    position: 'QA tester',
                    ganeder: 'male',
                    avatar:'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-14.jpg',
                    description: 'Мotivated for new knowledge and development in the field',
                    experience: 'Advance Academy - from September 2021 to the present',
                    study: 'HTML, CSS, Javascript',
                    currently: 'I am currently studying Node.js',
                    previous: 'I have previous experience outside the IT sector',
                },
            ];
    
            var insert = document.querySelector('#insert')
    
            arr.forEach(function(person) {
                console.log(person)
            
            var cart = createCart(person);
            var x = 1
    
            insert.append(cart);
    
            })
    
            function createCart(person) {
    
                //Create Virtual Element
                var cart = document.createElement("div");
                
                // Add Class
                cart.classList.add('cart');
    
                // Add HTML Inside
                cart.innerHTML = `<div class="personal-information">
                    <div class="avatar">
                        <img src="${person.avatar}" alt="${person.name} ${person.lastName}">
                    </div>
                    <h2>${person.position}</h2>
                    <h3>${person.name} ${person.lastName} / Age: ${person.age}</h3>
                    <h4>Expirience: Small</h4>
                    <p>${person.description}
                    </p>
                    <p>${person.experience}
                    </p>
                    <p>${person.study}
                    </p>
                    <p>${person.currently}
                    </p>
                    <p>${person.previous}
                    </p>
    
                </div>`
            
            return cart;
        }
    });