---
layout: post
title: "FUTX APERTA sinalogico"
---
## Entre zero e um existe infinitos valores

![pulsação cardíaca]({{"/assets/pulso.jpg" | absolute_url}})

<p id="pbox" class="box">
  <span id="spanstrap" class="strap">|</span>
</p>
```javascript
// atalhos para o DOM
const pbox = document.getElementById("pbox")
const spanstrap = document.getElementById("spanstrap")
```
```javascript
// função para movimentar a barra
function moveBar(x) {
    spanstrap.style.marginLeft = pbox.offsetWidth * x + 'px'
}
```

<script defer>
const pbox = document.getElementById("pbox")
const spanstrap = document.getElementById("spanstrap")
function moveBar(x) {
    spanstrap.style.marginLeft = pbox.offsetWidth * x + 'px'
}
</script>
<style>
  p.box {
    border-color: red;
    border-width: 1px;
    border-style: solid;
  }
  span.strap {
  color: red;
  }
</style>
