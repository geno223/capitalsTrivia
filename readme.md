# Capitals Trivia!
### By Eugenio Jimenez

DEPLOYED SITE: https://geno223.github.io/capitalsTrivia/
## Description on Project

A paragraph discussing the idea of your project, the API you are using and desired user experience.

> I am creating a trivia game where players have to pick the correct capital from a randomly gnerated state using ' https://cdn.contentful.com/spaces/60c0fuf4kl9b/environments/master/entries?access_token=S11M-iSrZpsp6sdspPQrDEvQsiJo6unuIzJYNbkp3t0&content_type=triviaQ' api. 
## Details about the API

Give me a brief description of the API you are using and how you plan on using it. Does it use some sort of authentication like an APIkey. List some of the urls are using below.

'https://cdn.contentful.com/spaces/60c0fuf4kl9b/environments/master/entries?access_token=S11M-iSrZpsp6sdspPQrDEvQsiJo6unuIzJYNbkp3t0&content_type=triviaQ': This returns a json array with different states and capitals.
This api requires an api key.
Sample Fetch/Ajax called:
```j
```
The Data I get back:
```json
// 20231207210839
// https://cdn.contentful.com/spaces/60c0fuf4kl9b/environments/master/entries?access_token=S11M-iSrZpsp6sdspPQrDEvQsiJo6unuIzJYNbkp3t0&content_type=triviaQ

{
  "sys": {
    "type": "Array"
  },
  "total": 20,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "1EYxotaxR2i0A3uZDObMsT",
        "type": "Entry",
        "createdAt": "2023-12-07T00:16:52.960Z",
        "updatedAt": "2023-12-07T01:42:13.801Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of New Jersey?",
        "a": "Trenton",
        "b": "Albany",
        "c": "Sacremento",
        "d": "Harrisburg",
        "answer": "Trenton"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "24CCauXn9v1bwMRi0DK6Z4",
        "type": "Entry",
        "createdAt": "2023-12-07T00:27:22.233Z",
        "updatedAt": "2023-12-07T00:27:22.233Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of Nevada?",
        "a": "Las Vegas",
        "b": "Oakland",
        "c": "Tyler",
        "d": "Carson City",
        "answer": "Carson City"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "4ZfjkfwM7Vi0SRgXJm5ctM",
        "type": "Entry",
        "createdAt": "2023-12-07T00:25:56.231Z",
        "updatedAt": "2023-12-07T00:26:27.016Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of Maryland?",
        "a": "Baltimore",
        "b": "Chicago",
        "c": "Boston",
        "d": "Annapolis",
        "answer": "Annapolis"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "7DhB3vpcLhNEhWTsNw2qAQ",
        "type": "Entry",
        "createdAt": "2023-12-07T00:25:10.116Z",
        "updatedAt": "2023-12-07T00:25:10.116Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of Ohio?",
        "a": "Cleveland",
        "b": "Cincinatti",
        "c": "Colombus",
        "d": "Miami",
        "answer": "Coloumbus"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "1lIErQsfcyl3XK2y0F8TH2",
        "type": "Entry",
        "createdAt": "2023-12-07T00:24:09.699Z",
        "updatedAt": "2023-12-07T00:24:09.699Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of Wisconsin?",
        "a": "Phoenix",
        "b": "Atlanta",
        "c": "Madison",
        "d": "Cheyenne",
        "answer": "Madison"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "4AAf2ri08Sbc1SxU5DnzWa",
        "type": "Entry",
        "createdAt": "2023-12-07T00:23:21.842Z",
        "updatedAt": "2023-12-07T00:23:21.842Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of Florida?",
        "a": "Tampa",
        "b": "Miami",
        "c": "Orlando",
        "d": "Tallahassee",
        "answer": "Tallahassee"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "4os91A1OVcMtYfp9QgsKRn",
        "type": "Entry",
        "createdAt": "2023-12-07T00:22:10.091Z",
        "updatedAt": "2023-12-07T00:22:10.091Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of Virginia?",
        "a": "Richmond",
        "b": "Charleston",
        "c": "Boston",
        "d": "Pittsburg",
        "answer": "Richmond"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "7BSDTYSPT27cICpkBbEhFA",
        "type": "Entry",
        "createdAt": "2023-12-07T00:21:07.045Z",
        "updatedAt": "2023-12-07T00:21:07.045Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of Washington?",
        "a": "Eugene",
        "b": "Seattle",
        "c": "Lexington",
        "d": "Olympia",
        "answer": "Olympia"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "2s1NYylTWkaPTHRfbwr6o0",
        "type": "Entry",
        "createdAt": "2023-12-07T00:20:03.624Z",
        "updatedAt": "2023-12-07T00:20:03.624Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of New York?",
        "a": "Brooklyn",
        "b": "Buffalo",
        "c": "Albany",
        "d": "Queens",
        "answer": "Albany"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "1eolTqUC1mbDs6cTBTw2Ku",
        "type": "Entry",
        "createdAt": "2023-12-07T00:19:20.121Z",
        "updatedAt": "2023-12-07T00:19:20.121Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of Utah?",
        "a": "Salt Lake City",
        "b": "Providence",
        "c": "Hartford",
        "d": "Gainesville",
        "answer": "Salt Lake City"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "1izccZ7xRCXjs46aAZDDl7",
        "type": "Entry",
        "createdAt": "2023-12-07T00:17:59.832Z",
        "updatedAt": "2023-12-07T00:17:59.832Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "Whats the capital of Vermont?",
        "a": "Dallas",
        "b": "Long Island",
        "c": "Kansas City",
        "d": "Montpelier",
        "answer": "Montpelier"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "3Ep1g1ZPHJYfP2GUwlQn0L",
        "type": "Entry",
        "createdAt": "2023-12-07T00:15:47.029Z",
        "updatedAt": "2023-12-07T00:15:47.029Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is the capital of Arkansas?",
        "a": "Springfield",
        "b": "Boise",
        "c": "Little Rock",
        "d": "Fort Meyers",
        "answer": "Little Rock"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "5FFp41QXTayEPE4UV02lnu",
        "type": "Entry",
        "createdAt": "2023-12-07T00:14:54.264Z",
        "updatedAt": "2023-12-07T00:14:54.264Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is the capital of Georgia?",
        "a": "Montgomery",
        "b": "Atlanta",
        "c": "Savannah",
        "d": "Helena",
        "answer": "Atlanta"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "kJR0jfxeimNOd2NOP0MNf",
        "type": "Entry",
        "createdAt": "2023-12-07T00:13:41.929Z",
        "updatedAt": "2023-12-07T00:13:41.929Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is the capital of  Tennessee? ",
        "a": "Albany",
        "b": "Memphis",
        "c": "Hartford",
        "d": "Nashville",
        "answer": "Nashville"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "sVR2XsolBDDTEC8MDz7JL",
        "type": "Entry",
        "createdAt": "2023-12-07T00:12:15.697Z",
        "updatedAt": "2023-12-07T00:12:15.697Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is the capital of Texas?",
        "a": "Austin",
        "b": "Orlando",
        "c": "Dallas",
        "d": "Houton",
        "answer": "Austin"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "5hQ7HwWoLISthpiQo2ZoyF",
        "type": "Entry",
        "createdAt": "2023-12-07T00:10:51.177Z",
        "updatedAt": "2023-12-07T00:10:51.177Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is the capital of North Carolina?",
        "a": "Carson City",
        "b": "Frankfort",
        "c": "Concord",
        "d": "Raleigh",
        "answer": "Raleigh"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "62bP4d9jGc0whEECKZehTm",
        "type": "Entry",
        "createdAt": "2023-12-07T00:08:54.455Z",
        "updatedAt": "2023-12-07T00:08:54.455Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is the capital of California?",
        "a": "Sacramento",
        "b": "Trenton",
        "c": "Columbus",
        "d": "Albany",
        "answer": "Sacramento"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "2QZqAj2QkQB6Sc3KtzZ03Y",
        "type": "Entry",
        "createdAt": "2023-12-07T00:07:34.505Z",
        "updatedAt": "2023-12-07T00:07:34.505Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is the capital of Hawaii?",
        "a": "Springfield",
        "b": "Tallahassee",
        "c": "Topeka",
        "d": "Honolulu",
        "answer": "Honolulu"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "1PbjOk7Xt5ZB7enzFB96Yg",
        "type": "Entry",
        "createdAt": "2023-12-07T00:05:37.941Z",
        "updatedAt": "2023-12-07T00:05:37.941Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is the capital of Colorado?",
        "a": "Honolulu",
        "b": "Denver",
        "c": "Lansing",
        "d": "Des Moines",
        "answer": "Denver"
      }
    },
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "60c0fuf4kl9b"
          }
        },
        "id": "5Acx9n2ck5iDmkxkkUPMSN",
        "type": "Entry",
        "createdAt": "2023-12-07T00:03:10.044Z",
        "updatedAt": "2023-12-07T00:03:10.044Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "triviaQ"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "question": "What is the Capital of Alabama?",
        "a": "Phoenix",
        "b": "Sacramento",
        "c": "Montgomery",
        "d": "Hartford",
        "answer": "Montgomery"
      }
    }
  ]
}
```

## Mockup

My site/applicaton will allow users to input their "Fav Holiday" then generate the date of that holiday and an appropriately themed holiday picture.


#### Mobile View (https://imgur.com/Ag9VjBr)

###[My Mobile View] (https://imgur.com/Ag9VjBr)

## Schedule of Work
|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | |
| Sun | Build fetch of data in JS file ||
| Mon | Render data from API on screen ||
| Tues| Build form for user to interact with ||




