# Schema

## Task

id | Int
groupId | Int
completedAt | Date Time
description | Text

## Dependency

id | Int
dependerId | Int
dependedOnId | Int

## Group

id | Int
name | Varchar

# HTTP API

## Get /groups

Returns all of the groups.

```
# Success 200
[ 
    { id: 1,
      name : "Purchases"
    },
    { id : 2,
      name : "Build Airplane"
    }
]
```

## Get /tasks

Returns all of the tasks.

```
# Success 200
[
    {
        id: 1,
        group: "Purchases",
        task: "Go to the bank",
        dependencyIds: [],
        completedAt: null
    },
    {
        id: 2,
        group: "Purchases",
        task: "Buy hammer",
        dependencyIds: [1],
        completedAt: null
    },
    {
        id: 3,
        group: "Purchases",
        task: "Buy wood",
        dependencyIds: [1],
        completedAt: null
    },
    {
        id: 4,
        group: "Purchases",
        task: "Buy nails",
        dependencyIds: [1],
        completedAt: null
    },
    {
        id: 5,
        group: "Purchases",
        task: "Buy paint",
        dependencyIds: [1],
        completedAt: null
    },
    {
        id: 6,
        group: "Build Airplane",
        task: "Hammer nails into wood",
        dependencyIds: [2, 3, 4],
        completedAt: null
    },
    {
        id: 8,
        group: "Build Airplane",
        task: "Paint wings",
        dependencyIds: [5, 6],
        completedAt: null
    },
    {
        id: 8,
        group: "Have a snack",
        task: "Have a snack",
        dependencyIds: [],
        completedAt: null
    },
]
```

## Get /tasks?groupId=1

Returns all of the tasks filtered by group.

```
# Success 200
[
    {
        id: 1,
        group: "Purchases",
        task: "Go to the bank",
        dependencyIds: [],
        completedAt: null
    },
    {
        id: 2,
        group: "Purchases",
        task: "Buy hammer",
        dependencyIds: [1],
        completedAt: null
    },
    {
        id: 3,
        group: "Purchases",
        task: "Buy wood",
        dependencyIds: [1],
        completedAt: null
    },
    {
        id: 4,
        group: "Purchases",
        task: "Buy nails",
        dependencyIds: [1],
        completedAt: null
    },
    {
        id: 5,
        group: "Purchases",
        task: "Buy paint",
        dependencyIds: [1],
        completedAt: null
    }
]
```

# POST /tasks

Creates a new task.

```
# payload
{
    description: "Go to work",
    group: "Purchases"
}

# Success returns status code 201

# Failure on bad request returns status code 400
```

# POST /dependencies 

Creates a new dependency.

```
# payload
{
    dependerId: 1,
    dependedOnId : 2
}

# Success returns a status code 201 created

# Failure bad request returns a 400

# Not found returns a 404
```

# PUT /tasks/:id

Updates a task to be completed.

```
# payload
{
    completedAt: "2008-09-15T15:53:00+05:00"
}
```