---
sidebar_position: 1
---

# Pointers

## Intro

In this documentation, you'll learn about pointers.
Pointers store address of variables or a memory location.
The purpose of a pointer is to save memory space and achieve faster execution time.

## Address in C

Pointers are powerful features of C programming. Before we learn pointers, let's learn about addresses first.
If you have a variable called ```c``` in your program, ```&c``` will give you its address in the memory.
The best example you have is the ```my_putchar``` function.
```c
#include <stdio.h>
 
void my_putchar(char c) //Here we recieve the char to write on the output
{
    //Write takes a pointer as parameter
    write(1, &c, 1);
    //So we pass the address of the character recieved.
    //It's basicaly the raw value of the pointer towards c.
}
```

If we write the address on the stdout you'll get somthing like this


## How to use pointers

This is how to declare a pointer in C
```c
// syntax
type *name; 
//An example pointer "ptr" that will hold an interger value
int *ptr;
```