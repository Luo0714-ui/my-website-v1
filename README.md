# 我的第一个网站（GitHub Pages 版）

这是一个使用 `index.html`、`style.css` 和 `script.js` 制作的单页网站，可发布到 GitHub Pages。

## 文件说明

```text
my-website-v1/
├─ index.html       # 页面内容和结构
├─ css/
│  └─ style.css     # 全站样式与手机端布局
├─ js/
│  └─ script.js     # 问候语切换与手机菜单交互
└─ README.md        # 发布说明
```

`index.html` 通过以下两行连接样式和交互文件：

```html
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
```

## 本地预览

进入 `my-website-v1` 文件夹，双击 `index.html` 即可用浏览器打开。桌面端可以直接点击顶部导航切换分区；手机宽度下需要先点“菜单”展开导航。

## 发布到 GitHub Pages

1. 登录 GitHub，点击右上角 `+`，选择 `New repository`。
2. 仓库名称可填写 `my-website-v1`，可见性选择 `Public`，然后创建仓库。
3. 进入仓库后选择上传文件，把本文件夹里的 `index.html`、`css` 文件夹和 `js` 文件夹上传到仓库根目录。

   上传后需要保持以下结构：

   ```text
   仓库根目录/
   ├─ index.html
   ├─ css/
   │  └─ style.css
   └─ js/
      └─ script.js
   ```

4. 提交文件后，打开仓库的 `Settings` → `Pages`。
5. 在 Build and deployment 中选择 `Deploy from a branch`，Branch 选择 `main`，文件夹选择 `/ (root)`，然后点击 `Save`。
6. 等待约 1 分钟后访问：

   ```text
   https://你的用户名.github.io/my-website-v1/
   ```

如果第一次显示 404，通常是页面仍在发布或仓库尚未设为公开，等待后刷新即可。
