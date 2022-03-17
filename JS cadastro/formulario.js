

var nome = "";
var sobrenome = "";
var email = "";
var senioridade = "";
var experiencia = "";

var frontend = "";
var backend = "";
var fullstack = "";
var areaDev = "";

var html = "";
var css = "";
var js = "";
var php = "";
var Csharp = "";
var Python = "";
var Java = "";
var LinguaDev = "";

var resultado = "";


$('.nome').mask('AA');

function verificar()
{    
    if (nome.value != ("") || sobrenomenome.value != ("") || emailnome.value != (""))
    {
    
    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;
    email = document.getElementById("email").value;
    senioridade = document.getElementById("senioridade").value;
    experiencia = document.getElementById("experiencia").value;

    frontend = document.getElementById("frontend").checked;
    backend = document.getElementById("backend").checked;
    fullstack = document.getElementById("fullstack").checked;

    html = document.getElementById("tecnologia1").checked;
    css = document.getElementById("tecnologia2").checked;
    js = document.getElementById("tecnologia3").checked;
    php = document.getElementById("tecnologia4").checked;
    Csharp = document.getElementById("tecnologia5").checked;
    Python = document.getElementById("tecnologia6").checked;
    Java = document.getElementById("tecnologia7").checked;

    

    if (frontend == true)
    {
        areaDev = "frontend";
    }
    if(backend == true)
    {
        areaDev = "backend";
    }
    if(fullstack == true)
    {
        areaDev = "fullstack";
    }
    
    
    resultado = (nome + sobrenome + email +
    senioridade + experiencia + frontend + 
    backend + fullstack + html + css + js + 
    php + Csharp + Python + Java);
    
    //window.alert(resultado)

    
    if (html || css || js || php || Csharp || Python || Java)
    {
        if (html)
        {
          LinguaDev += " html"
        }
        if (css)
        {
           LinguaDev += ", css"
        }
        if (js)
        {
            LinguaDev += ", js"
        }
        if (php)
        {
            LinguaDev += ", php"
        }
        if (Csharp)
        {
            LinguaDev += ", C#"
        }
        if (Python)
        {
            LinguaDev += ", Python"
        }
        if (Java)
        {
            LinguaDev += ", Java"
        }
    }
    else
    {
        LinguaDev = "";
    }
    
    
    
    document.getElementById("resultado").innerHTML = "Seu nome é " + nome + " " + sobrenome + ", seu email é " + email + ", seu cargo é " + senioridade + ", Sua Experiencia " 
    + experiencia + ", você atua em " + areaDev + ", sabe programar nas linguagens" + LinguaDev;
    
    
}
}