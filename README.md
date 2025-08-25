# Example Usage 

- clone repo 
- install npm & node
```bash
npm i
```
```bash
npm start
```
tunggu 1-2 menit muncul qr scan \

lanjut test pake curl kalau udah scan qr 


```bash
curl -X POST http://localhost:3000/send-text -H "Content-Type: application/json" -d '{"to":"6281111111111","message":"halo ini test dari curl"}'
```

ganti localhost jadi server ip sama data `-d` `to` diganti nomernya tujuan.

