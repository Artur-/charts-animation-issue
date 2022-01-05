To reproduce the issue:

npm install
npm run serve
open http://localhost:8000/dev/index.html?delay=50 # The area chart labels do not animate
open http://localhost:8000/dev/index.html?delay=0 # The area chart labels animate
