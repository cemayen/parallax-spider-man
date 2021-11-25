<script type="text/javascript">
            let texto = document.getElementById("texto");
            let newyork = document.getElementById("newyork");
            let spiderman = document.getElementById("spiderman");
            let pow = document.getElementById("pow");
                window.addEventListener('scroll', function(){
                    var value = window.scrollY;
            texto.style.bottom = -value * 0.5 + 'px';
            newyork.style.bottom = value * 0.5 + 'px';
            spiderman.style.left = -value * 0.5 + 'px';
            pow.style.left = value * 0.5 + 'px';         
    })
</script>
