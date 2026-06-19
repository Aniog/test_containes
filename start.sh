cd /workspace/my-app
npx vite --port 12000 --host 0.0.0.0 &
echo "Waiting for server..."
sleep 5
curl -s -o /dev/null -w "%{http_code}" http://localhost:12000
echo ""
echo "Server started"