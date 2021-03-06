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

## How to use pointers

This is how to declare a pointer in C
```c
// syntax
type *name; 
//An example pointer "ptr" that will hold an interger value
int *ptr;
```

Let's take an example.
```c
int value = 5; //We declare an integer that equals 5.
int *ptr = NULL; //We declare a pointer to NULL.

ptr = &c; //Here the address of 'value' is assigned to the 'ptr' pointer.
```
To access the value stored in the address we use the unary operator (*) that returns the value of the variable located at the address specified by its operand. This is also called "Dereferencing"
```c
int value = 5;
int *ptr = NULL;
ptr = &c;
printf("%d\n", ptr); //Here we'll have the raw value of the pointer "hexa address"
printf("%d\n", *ptr); //Here we are dereferencing the pointer so it will print "5"
```

## NULL pointers

It is a good practice to assign a NULL value to a pointer variable in case you do not have an exact address to be assigned. This is done at the time of variable declaration.
It is important for example when you want to know if a pointer is asigned to a value or not.
If you check a non asigned value your program may crash.

The NULL pointer is a constant with a value of zero defined in several standard libraries.
To check for a null pointer, you can use an 'if' statement as follows
```c
int *ptr = NULL;
if (ptr) //Check if the ptr is asigned.
if (!ptr) //Check if the ptr is NULL.
```

## Why to use pointers.

A pointer is an address towards a memory segment.