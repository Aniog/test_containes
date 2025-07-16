from fastapi import FastAPI
from pydantic import BaseModel
import subprocess
import os

app = FastAPI()

class CommandRequest(BaseModel):
    command: str
    cwd: str

@app.post("/run")
async def run_command(request: CommandRequest):
    # 进入指定的工作目录并执行命令
    try:
        # 切换目录
        os.chdir(request.cwd)
        # 执行命令
        result = subprocess.run(request.command, shell=True, capture_output=True, text=True)
        
        if result.returncode == 0:
            return {"stdout": result.stdout}
        else:
            return {"stderr": result.stderr, "error": "Command failed"}
    except Exception as e:
        return {"error": str(e)}

# 启动 FastAPI 服务
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8081)
