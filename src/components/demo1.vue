<template>
	<main class="main">
	    <span>前端GitHub</span>
	  </main>
</template>

<script>
	name:'demo1'
</script>

<style>
	  main {
	    width: 100%; height: 229px;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	  }
	  span {
	    display: inline-block;
	    width: 21ch;
	    font: bold 200% Consolas, Monaco, monospace;   /*等宽字体*/
	    overflow: hidden;
	    white-space: nowrap;
	    font-weight: 500;
	    border-right: 1px solid transparent;
	    animation: typing 10s steps(21), caret .5s steps(1) infinite;
	  }
	  @keyframes typing{
	    from {
	        width: 0;
	    }
	  }
	  @keyframes caret{
	    50% { border-right-color: currentColor}
	  }
</style>
