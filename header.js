let header = `
    <head>
    <title>funky493</title>
    <meta charset="UTF-8">
    <meta name="viewport" 
        content="width=device-width, initial-scale=1.0">
    </head>

    <header>
        <div class="nav-bar">
            <div id="name"><a href="index.html">funky493.xyz</a></div>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html">home</a></li>
                    <li><a href="about.html">about</a></li>
                    <li><a href="stuff.html">stuff</a></li>
                </ul>
            </nav>
        </div>
    </header>
`;
document.getElementById("header").innerHTML = header;
header = null;