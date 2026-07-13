body{margin:0;font-family:Arial;background:#eef2f5}
header{background:#c62828;color:#fff;padding:12px 18px;display:flex;justify-content:space-between;align-items:center}
.state{background:#2e7d32;padding:8px 12px;border-radius:18px}
.toolbar{display:flex;gap:10px;padding:10px;background:#fff;flex-wrap:wrap}
input,select,button{padding:8px;border-radius:6px;border:1px solid #bbb}
button{background:#1976d2;color:#fff;border:none}
.layout{display:grid;grid-template-columns:320px 1fr;height:calc(100vh - 120px)}
aside{overflow:auto;background:#f7f7f7}
.card{background:#fff;margin:10px;padding:12px;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.15)}
#map{height:100%}
.ok{color:#2e7d32;font-weight:bold}
@media(max-width:800px){.layout{grid-template-columns:1fr;grid-template-rows:auto 55vh}aside{order:2}main{order:1}}
