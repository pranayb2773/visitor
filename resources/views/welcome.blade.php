<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/sass/app.scss'])
</head>
<body>
<img src="{{ asset('dist/images/logo.svg') }}" alt="visitor">
<h1 class="text-3xl font-bold underline text-primary">
    Hello world! Tailwind added successfully.
</h1>
</body>
</html>
