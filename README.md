# Brief

To build an adaptively-sized grid 'sketch pad' with various mouse-over drawing effects

## Thoughts before beginning

Wow, this is going to take time. The resources clearly state that this is not going to be easy, and I can well believe it. I'm thankful at least for my previous HTML and CSS work so that I can spend more time getting over the (many) JavaScript hurdles. But I'm also excited, this feels at last like full manipulation of a webpage in a way I've never felt before. I'll be proud if at the end everything is functional, even though I anticipate a lingering feeling that I could have solved certain problems more efficiently.

## Thoughts after completion

Funnily, the starting exercises - drawing a grid from a given number, populating it with divs and having those divs change colour on `mouseover` - all came quite quickly without much thought, perhaps due to my experience with CSS grid. The last exercise, however, completely stumped me; clearly to have squares get darker each swipe meant a function which took the current colour as an argument, which made me realise I'd been rerunning a function to apply a color each new selection (i.e. if it was black and then pink was selected, the box would turn black and then a computation cycle later pink). I at last managed to wrangle the different exercises in to different functions, but I was utterly stumped by one thing:

``` 
let style = document.querySelector(#example);
example.style.backgroundColor = "hsl(0, 0%, 100%)";
example.addEventListener('mouseover', e => {
    console.log(e.target.style.backgroundColor) // logs "rgb(255, 255, 255)"(!)
})
```

Why? And why do `rgba` values *not* get converted *except* for black (`rgba(0, 0, 0, 0)`)? This really stumped me for a long time before I console logged every step to pinpoint that this was happening. Perhaps this is something which all developers go through...

I thought about not doing the bonus exercise, but I'm glad I did if only to have uncovered my inefficient colour application method. As a person, I'm bugged incessantly when I can't understand something. I basically spent the day working on this, whether at the computer or in my head. I just found the final exercise disproportionately harder than the first two.

NOTE: As always, presentation was a tertiary concern, and the page is simply styled and non-adaptive by design. At this stage, I'd rather spend my time elsewhere, as my experience before Odin was exclusively HTML and CSS.

## Areas for improvement

### Event Listeners

I still feel like applying event listeners to objects and having them pass exactly what I want to exactly which functions gets complicated, especially when nested in a `forEach()` function. I have to really concentrate to know exactly which variable is where in which scope.

### Scoping

More practice needed to feel confident knowing exactly which variable should be declared where (if needed within a function, whether it makes more sense to declare within, without or globally). We have been told to avoid `var` 'except for certain special cases', which I guess would have something to do with my question. I feel I'm improving in terms of knowing which code to put in which functioon, but still feel the choice between a function declaration, function variable and anonymous (arrow) function is quite arbitrary.

### Style manipulation

My `grayOut()` function proved that at this stage, manipulating style rules feels like clumsy string manipulation with too many conversions to facilitate mathematics. I'm sure there's a more efficient way of having written this function.

## Lessons learned

### Take as long as needed to understand the problem

I was getting nowhere with my original attempt to apply grayscaling because I hadn't fully understood the original problem, and was applying colours multiple times on each box in multiple successive calculations.

### Take breaks!

I found this one really hard. I find myself struggling to think of anything else when I'm stuck on a problem, and understand enough about problem solving to know that it can cause the Einstellung effect among other problems. I'm a perfectionist, so it never felt an appropriate time to let go as long as the solution was incorrect.

### Take the time to do it right

Related to the first point, but I was inches from throwing in the towel for the third optional problem when I knew it would bugme forever not to have done it. The problem was not me tackling the last problem, but wanting it to be the 'icing on the cake' when it was actually baking a new and far more difficult cake from scratch. More time, more planning, more breaks. It takes the time it takes and I shouldn't feel bad about that.