
        document.getElementById('toDosBtn').addEventListener('click', toDos);
    
        function toDos(){
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(users => {
                    let output = '<h2>Lists todos</h2>';
                    output += '<ul>';
                    users.forEach(function(user) {
                        output += `
                            <li>
                                ${user.title}
                            </li>
                        `;
                    });
                    output += '</ul>'
                    document.getElementById("response").innerHTML = output;
                });
        }