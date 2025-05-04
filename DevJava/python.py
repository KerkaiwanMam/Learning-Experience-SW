import requests
import json

# เลขประจำตัวผู้เข้าสัมภาษณ์
interview_ref = "PG01"

# URL ของ API
url = "https://api.ywc20.ywc.in.th/homework/candidates"

# Header ที่ระบุ x-reference-id
headers = {
    "x-reference-id": interview_ref
}

# ส่ง request ไปยัง API
response = requests.get(url, headers=headers)

# ตรวจสอบว่า response สำเร็จไหม
if response.status_code == 200:
    data = response.json()
    # แสดงผลแบบ JSON ที่อ่านง่าย (Pretty Print)
    print(json.dumps(data, indent=4, ensure_ascii=False))
else:
    print(f"เกิดข้อผิดพลาด: {response.status_code}")
    print(response.text)
