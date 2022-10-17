# JS-CSS_library (native JS)

Contains styles and native JS code for creating web-projects

You can create already styled:

- accordion
- carousel
- dropdown menu
- tabs
- modal windows
- request to server

To use this library you can:

1. Download ***script.js*** and ***style.css*** files from dist folder
2. Link then to your project
3. Set up layout

OR

1. Get ***.sass*** and ***.js*** files from src folder
2. Modify files due to your needs
3. Compile modified filed and use them by your own

Main function $ - using like selector for classes, tags, etc.

Methods:

- html() - get or post content to html-node
- eq() - get element by index
- index() - get element's index betweem it's siblings
- find() - find element by selector
- siblings() - get element's siblings
- addClass() - add class
- removeClass() - remove class
- toggleClass() - toggle class
- on(eventName, callback) - add event listener
- off(ebentName, callback) - remove event listener
- click(handler) - add event listener by click
- show() - show element
- hide() - hide element
- toggle() - toggle hiding and showing of element
- fadeIn(dur, display, fin) - add fade in animation to the element
- fadeOut(dur, fin) - add fade out animation to the element
- fadeToggle(dur, display, fin) - toggle fade in and fade out animation
- get(url, dataTypeAnswer = 'json') - get request to the server
- post(url, data, dataTypeAnswer = 'text') -post request to the server

### Accordion

1. Add html-structure to your html-file

```
        <div class="accordion mt-20 block-center">
            <div class="accordion-head">
                <span>Header</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-inner">
                    Some inner text
                </div>
            </div>
            <div class="accordion-head">
                <span>Header</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-inner">
                    Some innner text
                </div>
            </div>
        </div>
```

2. Init accordion using ***accordion(headActive='accordion-head--active', contentActive='accordion-content--active', paddings=40)*** method

### Carousel

1. Add html-structure to your html-file

```
          <div class="carousel" id="example">
            <ol class="carousel-indicators">
                <li class="active" data-slide-to="0"></li>
                <li data-slide-to="1"></li>
                <li data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-slides">
                    <div class="carousel-item">
                        <img src="---" alt="photo">
                    </div>
                    <div class="carousel-item">
                        <img src="---" alt="photo">
                    </div>
                    <div class="carousel-item">
                        <img src="---" alt="photo">
                    </div>
                </div>
            </div>
            <a href="" class="carousel-prev" data-slide="prev">
                <span class="carousel-prev-icon">&lt;</span>
            </a>
            <a href="" class="carousel-next" data-slide="next">
                <span class="carousel-next-icon">&gt;</span>
            </a>
        </div>
```

2. Init carousel using ***carousel()*** method

### Dropdown Menu

1. Add html-structure to your html-file

```
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="---" class="dropdown-item">link1</a>
                <a href="---" class="dropdown-item">link2</a>
                <a href="---" class="dropdown-item">link3</a>
            </div>
        </div>
```

2. Init dropdown using ***dropdown()*** method

### Tabs

1. Add html-structure to your html-file

```
          <div class="tab mt-20 block-center">
            <div class="tab-panel" data-tabpanel>
                <div class="tab-item tab-item--active">Content 1</div>
                <div class="tab-item">Content 2</div>
                <div class="tab-item">Content 3</div>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton2">Dropdown button</button>
                    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton2">
                        <a href="#" class="dropdown-item">Action #1</a>
                        <a href="#" class="dropdown-item">Action #2</a>
                        <a href="#" class="dropdown-item">Action #3</a>
                    </div>
                </div>
            </div>
            <div class="tab-content tab-content--active">
                Some content
            </div>
            <div class="tab-content">
                Some content
            </div>
            <div class="tab-content">
                 Some content
            </div>
        </div>  
```

2. Init tabs using ***tab()*** method

### Modal windows

1. Add html-structure to your html-file

```
        <div class="modal" id="exampleModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            Modal Title
                        </div>
                    </div>
                    <div class="modal-body">
                        Some content
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger" data-close>Close</button>
                        <button class="btn btn-success">Save changes</button>
                    </div>
                </div>
            </div>
        </div> 
```

2. Init modal window using ***modal()*** method





