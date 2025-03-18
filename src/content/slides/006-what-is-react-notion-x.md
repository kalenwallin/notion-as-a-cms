---
title: 'What is React-Notion-X?'
type: 'content'
order: 6
---
**[React-Notion-X](https://github.com/NotionX/react-notion-x)** is a library created by Travis Fischer to render Notion pages in React.

```zsh
npm install react-notion-x
```

First you fetch the content for a Notion page using its ID.

```javascript
import { NotionAPI } from 'notion-client'
const notion = new NotionAPI()
const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')
```

Then render the page content with React.

```javascript
import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'
export default ({ recordMap }) => (
  <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
)
```
