<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proste Style MVC</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    <style>
        header {
            background-color: #4CAF50; /* Zielony nagłówek, bardziej stonowany */
            padding: 1rem 0;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Delikatny cień pod nagłówkiem */
        }
        form h2 {
            margin-bottom: 1.5rem; /* Większy odstęp pod tytułem formularza */
            color: #2C3E50; /* Ciemniejszy kolor tytułu formularza */
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 2rem; /* Dodano margines górny */
        }
        /* Style dla małych ekranów (telefony) */
        @media (max-width: 768px) {
            nav ul {
                flex-direction: column; /* Linki nawigacyjne w kolumnie na małych ekranach */
                gap: 0.5rem; /* Zmniejszony odstęp między linkami na małych ekranach */
            }
            nav ul li {
                margin: 0.5rem 0; /* Dodano margines dla każdego elementu listy */
            }
            form {
                padding: 1.5rem; /* Zmniejszono padding formularza na małych ekranach */
            }
            header h1{
               font-size: 1.8rem; /* Zmniejszono font nagłówka na małych ekranach */
            }
            .form-group label{
                font-size: 0.9rem;
            }
            .form-control{
                font-size: 0.9rem;
                padding: 0.5rem;
            }
            .btn{
                font-size: 1rem;
                padding: 0.75rem 1rem;
            }
        }
    </style>

</head>
<body>
    <header>
        <h1>Moja Aplikacja MVC</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">Strona główna</a></li>
            <li><a href="#">Produkty</a></li>
            <li><a href="#">Usługi</a></li>
            <li><a href="#">Kontakt</a></li>
        </ul>
    </nav>
    <main>
        <h2>Witaj na mojej stronie!</h2>
        <p>To jest prosta strona demonstracyjna używająca HTML, CSS i założeń MVC. Formularz poniżej demonstruje style dla inputów i przycisków.</p>
        <form>
            <h2>Formularz kontaktowy</h2>
            <div class="form-group">
                <label for="name">Imię:</label>
                <input type="text" id="name" name="name" class="form-control" placeholder="Wpisz swoje imię">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" class="form-control" placeholder="Wpisz swój email">
            </div>
            <div class="form-group">
                <label for="message">Wiadomość:</label>
                <textarea id="message" name="message" class="form-control" placeholder="Wpisz swoją wiadomość"></textarea>
            </div>
            <button type="submit" class="btn">Wyślij</button>
        </form>
    </main>
    <footer>
        <p>&copy; 2024 Moja Aplikacja. Wszelkie prawa zastrzeżone.</p>
    </footer>
</body>
</html>
