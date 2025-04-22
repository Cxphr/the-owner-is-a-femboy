@import url(https://fonts.googleapis.com/css?family=Open+Sans);

html, body {
  height: 100%;
  margin: 0;
  position: relative;
  background: #fff;
  font-family: "Open Sans";
  cursor: none;
}

#wrap {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  filter: blur(20px);
}

#wrap p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: rgba(255,255,255,.5);
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
}

.ball {
  pointer-events: none;
  position: absolute; 
  width: 200px;
  height: 200px;
  border-radius: 50%; 
  background: gray;
  animation: implode 3s ease-in-out;
  animation-fill-mode: both;
  opacity: .025;
  background-blend-mode: multiply;
}

@keyframes implode {
  100% {transform: scale(0)}
}
