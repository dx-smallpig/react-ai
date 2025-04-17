一个轻量级 React18 应用，用于个人学习react、AIGC、低代码等方面的知识，以及记录看到有趣的代码功能和css样式动画等
模板搭建基于项目：https://github.com/panyushan-jade/react-template-admin.git
掘金文章：https://juejin.cn/post/7236168316237414461

技术栈：

- react18
- react-router6
- zustand4
- vite4
- axios
- dayjs
  ......

支持的功能：

- [x] 登录/退出登录
- [x] 数据持久化存储
- [x] 路由鉴权
- [x] 动态主题
- [x] 错误处理
- [x] axios 封装

# 目录结构

```bash
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
├─ src                        # 项目源代码
│   ├─ components             # 全局公用组件
│   ├─ layout                 # 布局组件
│   ├─ config                 # 全局配置
│   │   └─ router.tsx         # 路由配置
│   ├─ services               # api接口
│   ├─ stores                 # 全局 store管理
│   ├─ utils                  # 全局公用方法
│   ├─ pages                  # pages 所有页面
│   ├─ App.tsx                # 入口页面
│   ├─ global.d.ts            # 全局声明文件
│   ├─ index.css              # 全局样式文件
│   └─main.tsx               # 源码入口
└── .commitlintrc.js          # 自定义commitlint
└── .cz-config.js             # 自定义commitlint
└── .eslintignore             # eslint忽略文件
└── .eslintrc.js              # eslint配置
└── .prettierrc.js            # prettier配置
└── vite.config.js            # vite打包配置
└── index.html                # html模板
└── package.json              # package.json
```

# 安装及使用

```shell
# 克隆项目
git clone https://github.com/dx-smallpig/react-ai.git

# 进入项目目录
cd react-ai

# 安装依赖
pnpm install(推荐使用pnpm)

# 启动
pnpm start

# 构建
pnpm build

# 预览
pnpm preview

```


# git 提交

```shell
# 添加到暂存区
git add ./

# 提交代码
pnpm cz
按照提示下一步就行，.cz-config.js可以修改提示相关配置

```