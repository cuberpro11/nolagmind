---
title: My Vision for the Best Note Taking App
date: 2025-11-06T00:00:00Z
excerpt: "When existing note apps fall short, sometimes you have to build your own. Here's my vision for a keyboard driven, node based app that combines markdown, mind maps, kanban, and checklists..."
draft: false
---
### What all other note apps are missing

I have heard about and tried a few note apps, but when one note app gets something right it is missing some other important thing. In order for a note app to be perfect in my eyes, it should be dynamic enough in a way were it can follow my thought process and help me retain, save, or plan the information that I am working with in a organized and searchable way; and I should be able to accomplish all the main actions with only a keyboard.

Obsidian is the best that I tried because it allows me to do everything with the keyboard, it is fast and smooth to use, it is very flexible, and all notes are searchable and easy to link. However, it is not dynamic enough. This means that it is missing the ability to make mind maps, checklists where each item has properties, and a kanban mode. All these things are not direct deal breakers (which is why I have been using obsidian for a while) but it makes me have to use other apps if I want to manage my projects, take notes on a person, or plan a story.

The issues that I have been having with obsidian lead me to doing some research on alternatives. The most promising one was Anytype. I loved the idea of everything being an object, the data sets you could make, and the customizability of the pages. However, it felt very clunky to use and most of the features required me to use a mouse. This slowed me down heavily and felt very off, compared to the fast markdown and vim mode of Obsidian.

### What will be the best note taking app then?

When you can't find anything that fits your need, and you have the ability to make apps and software: you build the tool that you need. That is exactly what I plan to do.

What you can expect from my note app:

- Fast, simple, and clean ui
- Can be entirely controlled by your keyboard
- Everything will be a node
- Notes will be searchable and written in markdown
- You can create the following type of notes:
	- regular markdown pages
	- kanban style
	- mind maps
	- complex checklists
- Everything can be linked and reused
- You can organize your notes into folders
- Everything will be stored locally

My goal is to make a note app that is as fluid and simple to use, while still being able to do everything that you want it to do. Everything should be intuitively accessible to you and can be done with only the keyboard.

The reason that I want to make everything a node, is because it will allow you to convert your bullet point list into a auto generated mind map just by typing one command. It will also make everything much easier to search and add or re-use in other notes.

### Why speed has to come first

Most note apps treat speed as an afterthought, something you optimize once the feature list is "done." I think that's backwards. The moment an app makes you wait, even for a fraction of a second, on typing, searching, or switching notes, you lose the thought you were trying to capture. That's the entire premise behind No Lag Mind: zero lag editing isn't a nice-to-have, it's the foundation everything else is built on. If the app can't keep up with your fingers, none of the other features matter.

This is also why the app is built with Tauri instead of Electron. Native performance means the editor responds the instant you type, wikilinks resolve without a noticeable delay, and the search bar returns results as fast as you can read them. A note app is a tool you reach for dozens of times a day, so every millisecond of friction compounds into a real productivity cost over a week or a month.

### Keyboard-first, not keyboard-only

Being able to do everything with the keyboard doesn't mean the mouse is banned, it means you're never forced to use it. Slash commands, wikilinks, and a command palette-style search are all designed so your hands never have to leave the home row to create a note, link two ideas together, or jump to something you wrote last month. This lines up with a philosophy I keep coming back to in this blog: the fewer steps between having a thought and getting it down, the more useful the tool actually is.

### Where this is headed

Right now the app already covers fast markdown editing, wikilinks, and slash commands. Turning bullet lists into mind maps, adding kanban boards, and building out richer checklists are the next milestones on the roadmap. I'd rather ship a smaller set of features that feel instant than a large feature set that feels sluggish, so each of these will land once they meet the same zero-lag bar as the editor itself.
