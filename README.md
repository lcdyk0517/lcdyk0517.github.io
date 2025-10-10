# DTB Panel序列识别工具 / DTB Panel Sequence Identification Tool

一个基于Web的DTB文件识别工具，专为类R36S掌机设计，支持ArkOS4Clone和ArkOSK36系统。

A web-based DTB file identification tool designed for R36S-like handheld devices, supporting ArkOS4Clone and ArkOSK36 systems.

## 🌟 功能特性 / Features

- **多语言支持** / **Multi-language Support**
  - 中文 / Chinese
  - 英文 / English
- **系统兼容** / **System Compatibility**
  - ArkOS4Clone
  - ArkOSK36
- **智能识别** / **Smart Identification**
  - 基于MD5哈希的精确匹配 / Exact matching based on MD5 hash
  - 基于Panel参数的屏幕匹配 / Screen matching based on panel parameters
  - 自动提取和分析DTB文件信息 / Automatic extraction and analysis of DTB file information
- **用户友好** / **User Friendly**
  - 拖放文件上传 / Drag and drop file upload
  - 实时识别结果 / Real-time identification results
  - 详细的调试信息 / Detailed debug information

## 🚀 快速开始 / Quick Start

### 在线使用 / Online Usage

直接访问工具页面，无需安装：
Visit the tool page directly, no installation required:

text

```
https://lcdyk0517.github.io
```



### 本地使用 / Local Usage

1. 克隆或下载项目文件
   Clone or download the project files
2. 在浏览器中打开 `index.html`
   Open `index.html` in your browser
3. 开始使用DTB识别功能
   Start using the DTB identification feature

## 📖 使用指南 / Usage Guide

### 基本步骤 / Basic Steps

1. **上传DTB文件** / **Upload DTB File**
   - 点击"选择DTB文件"按钮或拖放文件到上传区域
   - Click "Select DTB File" button or drag and drop file to upload area
2. **选择目标系统** / **Select Target System**
   - 根据你的设备选择 ArkOS4Clone 或 ArkOSK36
   - Select ArkOS4Clone or ArkOSK36 based on your device
3. **开始识别** / **Start Identification**
   - 点击"识别DTB文件"按钮
   - Click "Identify DTB File" button
4. **查看结果** / **View Results**
   - 查看MD5匹配状态
   - Check MD5 match status
   - 查看屏幕参数匹配情况
   - Check screen parameter matching
   - 获取适配建议
   - Get adaptation suggestions

### 识别结果说明 / Identification Results Explanation

- **✅ 完全匹配** / **✅ Exact Match**
  - MD5和所有参数完全匹配
  - MD5 and all parameters match exactly
  - 推荐使用的配置
  - Recommended configuration
- **⚠️ 屏幕参数匹配** / **⚠️ Screen Parameter Match**
  - 屏幕参数匹配但MD5不同
  - Screen parameters match but MD5 differs
  - 可以测试使用，但不保证完全兼容
  - Can be used for testing but full compatibility is not guaranteed
- **❓ 未找到匹配** / **❓ No Match Found**
  - 当前系统中没有适配的配置
  - No adapted configuration found in current system
  - 可能需要手动适配
  - Manual adaptation may be required

## 🔧 技术细节 / Technical Details

### 支持的DTB信息 / Supported DTB Information

- **Panel初始化序列** / **Panel Initialization Sequence**
- **GPIO配置** / **GPIO Configuration**
  - Reset GPIOs
  - Enable GPIOs
- **系统特定参数** / **System Specific Parameters**
  - SDIO支持 (ArkOS4Clone) / SDIO Support (ArkOS4Clone)
  - 外部放大器使用 (ArkOSK36) / External Amplifier Usage (ArkOSK36)

### 数据库 / Database

工具内置了已知设备的配置数据库：
The tool includes a built-in database of known device configurations:

- **ArkOS4Clone**: 包含多种R36S变体和克隆设备
- **ArkOS4Clone**: Includes various R36S variants and clone devices
- **ArkOSK36**: 包含K36系列面板配置
- **ArkOSK36**: Includes K36 series panel configurations
