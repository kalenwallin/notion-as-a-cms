---
title: 'Page Record Map'
type: 'content'
order: 4
---
Json representation of a page and its children blocks.
```javascript
import { NotionAPI } from 'notion-client';
const pageId = '1aac0097049980e4b9c7cbe98051a4e3';
const notion = new NotionAPI();
const recordMap = await notion.getPage(pageId);
```
Record Map:
```json
{
  "block": {
    "1aac0097-0499-80e4-b9c7-cbe98051a4e3": {
      "value": {
        "id": "1aac0097-0499-80e4-b9c7-cbe98051a4e3",
        "version": 113,
        "type": "page",
        "properties": {
          "title": [
            [
              "Block Type: Database"
            ]
          ]
        },
        "content": [
          "1aac0097-0499-806f-a781-fe711825168e",
          "1aac0097-0499-804c-9843-f2e0c03d03c0"
        ],
        "format": {
          "site_id": "1aac0097-0499-8024-922a-0079a4642425",
          "page_cover_position": 0.4,
          "social_media_image_preview_url": "attachment:968d5079-3f3c-43ec-9892-96df327cd222:SocialMediaPreviewImage.png"
        },
        "permissions": [
          {
            "role": "editor",
            "type": "user_permission",
            "user_id": "53f2771d-9ff2-461a-961b-e6f42e86e679"
          },
          {
            "role": "reader",
            "type": "public_permission",
            "added_timestamp": 1740955282238
          }
        ],
        "created_time": 1740955036452,
        "last_edited_time": 1740956096625,
        "parent_id": "180c0097-0499-8087-8230-fb3494c2e8f1",
        "parent_table": "block",
        "alive": true,
        "file_ids": [
          "8fb7fdf3-45b7-4707-a74f-722d68885990",
          "968d5079-3f3c-43ec-9892-96df327cd222"
        ],
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "180c0097-0499-8087-8230-fb3494c2e8f1": {
      "role": "none"
    },
    "1aac0097-0499-806f-a781-fe711825168e": {
      "value": {
        "id": "1aac0097-0499-806f-a781-fe711825168e",
        "version": 32,
        "type": "collection_view",
        "view_ids": [
          "1aac0097-0499-80d1-92df-000cd178fe75"
        ],
        "collection_id": "1aac0097-0499-80c9-9940-000b7f8cc6a2",
        "format": {
          "collection_pointer": {
            "id": "1aac0097-0499-80c9-9940-000b7f8cc6a2",
            "table": "collection",
            "spaceId": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
          }
        },
        "created_time": 1740955056039,
        "last_edited_time": 1740956450581,
        "parent_id": "1aac0097-0499-80e4-b9c7-cbe98051a4e3",
        "parent_table": "block",
        "alive": true,
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1aac0097-0499-804c-9843-f2e0c03d03c0": {
      "value": {
        "id": "1aac0097-0499-804c-9843-f2e0c03d03c0",
        "version": 3,
        "type": "text",
        "created_time": 1740955705421,
        "last_edited_time": 1740955705422,
        "parent_id": "1aac0097-0499-80e4-b9c7-cbe98051a4e3",
        "parent_table": "block",
        "alive": true,
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1aac0097-0499-8040-8b93-f432313693f4": {
      "value": {
        "id": "1aac0097-0499-8040-8b93-f432313693f4",
        "version": 141,
        "type": "page",
        "properties": {
          ";EOn": [
            [
              "John Doe"
            ]
          ],
          "s{KR": [
            [
              "Blog"
            ]
          ],
          "title": [
            [
              "Page Title 2"
            ]
          ]
        },
        "content": [
          "1abc0097-0499-80c1-8750-c6893a5b1000",
          "1abc0097-0499-80b5-92d6-f240f1225aea",
          "1abc0097-0499-80d0-8a62-ea96cd2969ab"
        ],
        "format": {
          "page_icon": "🥐",
          "page_cover": "/images/page-cover/gradients_5.png",
          "page_cover_position": 0.6,
          "social_media_image_preview_url": "attachment:da5c4289-ea50-43e7-acd3-193f05b392dd:SocialMediaPreviewImage.png"
        },
        "created_time": 1740955083963,
        "last_edited_time": 1741022700566,
        "parent_id": "1aac0097-0499-80c9-9940-000b7f8cc6a2",
        "parent_table": "collection",
        "alive": true,
        "file_ids": [
          "d93d9771-ab32-41f6-a425-5685b394a376",
          "da5c4289-ea50-43e7-acd3-193f05b392dd"
        ],
        "created_by_table": "notion_user",
        "created_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "last_edited_by_table": "notion_user",
        "last_edited_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1aac0097-0499-8058-a075-d4799db53368": {
      "value": {
        "id": "1aac0097-0499-8058-a075-d4799db53368",
        "version": 143,
        "type": "page",
        "properties": {
          ";EOn": [
            [
              "Kalen Wallin"
            ]
          ],
          "s{KR": [
            [
              "Blog,Test"
            ]
          ],
          "title": [
            [
              "Page Title"
            ]
          ]
        },
        "content": [
          "1abc0097-0499-80a6-8bd1-db5f2164bc68",
          "1abc0097-0499-804f-9dc2-ed4e164d16f1",
          "1abc0097-0499-8023-89d9-dc82327dfe90",
          "1abc0097-0499-8078-ba9c-fea1b14cf2c8"
        ],
        "format": {
          "page_icon": "🏈",
          "page_cover": "/images/page-cover/gradients_10.jpg",
          "page_cover_position": 0.6,
          "social_media_image_preview_url": "attachment:6dca40e8-917d-4ecc-bc43-878f220242bb:SocialMediaPreviewImage.png"
        },
        "created_time": 1740955070534,
        "last_edited_time": 1741024905826,
        "parent_id": "1aac0097-0499-80c9-9940-000b7f8cc6a2",
        "parent_table": "collection",
        "alive": true,
        "file_ids": [
          "6dca40e8-917d-4ecc-bc43-878f220242bb"
        ],
        "created_by_table": "notion_user",
        "created_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "last_edited_by_table": "notion_user",
        "last_edited_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1abc0097-0499-80c1-8750-c6893a5b1000": {
      "value": {
        "id": "1abc0097-0499-80c1-8750-c6893a5b1000",
        "version": 3,
        "type": "transclusion_reference",
        "format": {
          "transclusion_reference_pointer": {
            "id": "1abc0097-0499-8027-800e-ee0f3291d1e6",
            "table": "block",
            "spaceId": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
          }
        },
        "created_time": 1741022700563,
        "last_edited_time": 1741022700566,
        "parent_id": "1aac0097-0499-8040-8b93-f432313693f4",
        "parent_table": "block",
        "alive": true,
        "created_by_table": "notion_user",
        "created_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "last_edited_by_table": "notion_user",
        "last_edited_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1abc0097-0499-80b5-92d6-f240f1225aea": {
      "value": {
        "id": "1abc0097-0499-80b5-92d6-f240f1225aea",
        "version": 7,
        "type": "image",
        "properties": {
          "source": [
            [
              "https://media2.giphy.com/media/5fQOAXYp3JpyU/giphy.gif?cid=7941fdc6r87j3atwwu02tr05qern7iak1gvv4obw7invxilc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            ]
          ]
        },
        "format": {
          "display_source": "https://media2.giphy.com/media/5fQOAXYp3JpyU/giphy.gif?cid=7941fdc6r87j3atwwu02tr05qern7iak1gvv4obw7invxilc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        },
        "created_time": 1741022729044,
        "last_edited_time": 1741022750866,
        "parent_id": "1aac0097-0499-8040-8b93-f432313693f4",
        "parent_table": "block",
        "alive": true,
        "created_by_table": "notion_user",
        "created_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "last_edited_by_table": "notion_user",
        "last_edited_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1abc0097-0499-80d0-8a62-ea96cd2969ab": {
      "value": {
        "id": "1abc0097-0499-80d0-8a62-ea96cd2969ab",
        "version": 3,
        "type": "text",
        "created_time": 1741022753254,
        "last_edited_time": 1741022753255,
        "parent_id": "1aac0097-0499-8040-8b93-f432313693f4",
        "parent_table": "block",
        "alive": true,
        "created_by_table": "notion_user",
        "created_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "last_edited_by_table": "notion_user",
        "last_edited_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1abc0097-0499-80a6-8bd1-db5f2164bc68": {
      "value": {
        "id": "1abc0097-0499-80a6-8bd1-db5f2164bc68",
        "version": 3,
        "type": "transclusion_reference",
        "format": {
          "transclusion_reference_pointer": {
            "id": "1abc0097-0499-8027-800e-ee0f3291d1e6",
            "table": "block",
            "spaceId": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
          }
        },
        "created_time": 1741022670962,
        "last_edited_time": 1741022670965,
        "parent_id": "1aac0097-0499-8058-a075-d4799db53368",
        "parent_table": "block",
        "alive": true,
        "created_by_table": "notion_user",
        "created_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "last_edited_by_table": "notion_user",
        "last_edited_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1abc0097-0499-804f-9dc2-ed4e164d16f1": {
      "value": {
        "id": "1abc0097-0499-804f-9dc2-ed4e164d16f1",
        "version": 7,
        "type": "image",
        "properties": {
          "source": [
            [
              "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
            ]
          ]
        },
        "format": {
          "display_source": "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
        },
        "created_time": 1741022766998,
        "last_edited_time": 1741022773248,
        "parent_id": "1aac0097-0499-8058-a075-d4799db53368",
        "parent_table": "block",
        "alive": true,
        "created_by_table": "notion_user",
        "created_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "last_edited_by_table": "notion_user",
        "last_edited_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1abc0097-0499-8023-89d9-dc82327dfe90": {
      "value": {
        "id": "1abc0097-0499-8023-89d9-dc82327dfe90",
        "version": 59,
        "type": "quote",
        "properties": {
          "title": [
            [
              "a wise man once said"
            ]
          ]
        },
        "created_time": 1741022970710,
        "last_edited_time": 1741022976934,
        "parent_id": "1aac0097-0499-8058-a075-d4799db53368",
        "parent_table": "block",
        "alive": true,
        "created_by_table": "notion_user",
        "created_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "last_edited_by_table": "notion_user",
        "last_edited_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    },
    "1abc0097-0499-8078-ba9c-fea1b14cf2c8": {
      "value": {
        "id": "1abc0097-0499-8078-ba9c-fea1b14cf2c8",
        "version": 3,
        "type": "text",
        "created_time": 1741024905825,
        "last_edited_time": 1741024905826,
        "parent_id": "1aac0097-0499-8058-a075-d4799db53368",
        "parent_table": "block",
        "alive": true,
        "created_by_table": "notion_user",
        "created_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "last_edited_by_table": "notion_user",
        "last_edited_by_id": "53f2771d-9ff2-461a-961b-e6f42e86e679",
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    }
  },
  "collection_view": {
    "1aac0097-0499-80d1-92df-000cd178fe75": {
      "value": {
        "id": "1aac0097-0499-80d1-92df-000cd178fe75",
        "version": 8,
        "type": "gallery",
        "name": "Gallery view",
        "format": {
          "gallery_cover": {
            "type": "page_cover"
          },
          "collection_pointer": {
            "id": "1aac0097-0499-80c9-9940-000b7f8cc6a2",
            "table": "collection",
            "spaceId": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
          },
          "gallery_properties": [
            {
              "visible": true,
              "property": "title"
            },
            {
              "visible": true,
              "property": ";EOn"
            },
            {
              "visible": true,
              "property": "aFM^"
            },
            {
              "visible": true,
              "property": "s{KR"
            }
          ]
        },
        "parent_id": "1aac0097-0499-806f-a781-fe711825168e",
        "parent_table": "block",
        "alive": true,
        "page_sort": [
          "1aac0097-0499-8058-a075-d4799db53368",
          "1aac0097-0499-8040-8b93-f432313693f4"
        ],
        "query2": {
          "aggregations": [
            {
              "aggregator": "count"
            }
          ]
        },
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    }
  },
  "collection": {
    "1aac0097-0499-80c9-9940-000b7f8cc6a2": {
      "value": {
        "id": "1aac0097-0499-80c9-9940-000b7f8cc6a2",
        "version": 25,
        "name": [
          [
            "Gallery Title"
          ]
        ],
        "schema": {
          ";EOn": {
            "name": "Author",
            "type": "text"
          },
          "aFM^": {
            "name": "Created",
            "type": "created_time"
          },
          "s{KR": {
            "name": "Tags",
            "type": "multi_select",
            "options": [
              {
                "id": "58f15c62-67d8-4229-a298-46e36a7fae38",
                "color": "red",
                "value": "Blog",
                "collectionIds": [
                  "1aac0097-0499-80c9-9940-000b7f8cc6a2"
                ]
              },
              {
                "id": "bd2811bd-1265-4e5d-bce2-9469d7a506ab",
                "color": "purple",
                "value": "Test",
                "collectionIds": [
                  "1aac0097-0499-80c9-9940-000b7f8cc6a2"
                ]
              }
            ]
          },
          "title": {
            "name": "Name",
            "type": "title"
          }
        },
        "format": {
          "property_visibility": [
            {
              "property": "aFM^",
              "visibility": "show"
            },
            {
              "property": "s{KR",
              "visibility": "show"
            },
            {
              "property": ";EOn",
              "visibility": "show"
            }
          ],
          "ai_suggested_properties": [
            {
              "name": "Description",
              "type": "text"
            },
            {
              "name": "URL",
              "type": "url"
            },
            {
              "name": "Contact Email",
              "type": "email"
            },
            {
              "name": "Phone Number",
              "type": "phone_number"
            },
            {
              "name": "Status",
              "type": "status"
            },
            {
              "name": "Priority",
              "type": "select",
              "options": [
                {
                  "id": "tdr`",
                  "color": "default",
                  "value": "High"
                },
                {
                  "id": "|sBQ",
                  "color": "brown",
                  "value": "Medium"
                },
                {
                  "id": "|e<L",
                  "color": "orange",
                  "value": "Low"
                }
              ]
            },
            {
              "name": "Due Date",
              "type": "date"
            },
            {
              "name": "Assigned To",
              "type": "person"
            },
            {
              "name": "Attachments",
              "type": "file"
            },
            {
              "name": "Rating",
              "type": "number"
            }
          ],
          "collection_page_properties": [
            {
              "visible": true,
              "property": "aFM^"
            },
            {
              "visible": true,
              "property": "s{KR"
            }
          ]
        },
        "parent_id": "1aac0097-0499-806f-a781-fe711825168e",
        "parent_table": "block",
        "alive": true,
        "migrated": true,
        "space_id": "634ecf7b-9c1a-4830-a4ca-be8489ef58d9"
      },
      "role": "reader"
    }
  },
  "notion_user": {},
  "collection_query": {
    "1aac0097-0499-80c9-9940-000b7f8cc6a2": {
      "1aac0097-0499-80d1-92df-000cd178fe75": {
        "collection_group_results": {
          "type": "results",
          "blockIds": [
            "1aac0097-0499-8058-a075-d4799db53368",
            "1aac0097-0499-8040-8b93-f432313693f4"
          ],
          "hasMore": false
        }
      }
    }
  },
  "signed_urls": {}
}
```
