!(function () {
    const htmlCode = document.querySelector('#htmlCode')
    const cssCode = document.querySelector('#cssCode');
    const jsCode = document.querySelector('#jsCode');
    const outputWindow = document.querySelector('#outputWindow');
    

    // iframe documents elements
    const outputContentWindow = outputWindow.contentWindow;
    const outputBody = outputWindow.contentDocument.body;
    const outputHead = outputWindow.contentDocument.head;


    // code editor options like syntex highlight/package etc .

    let runHtml = () => {
        // this is for html editor
        const htmlEditor = ace.edit(htmlCode);
        htmlEditor.getSession().setMode('ace/mode/html');
        htmlEditor.setTheme('ace/theme/tomorrow_night')
        // html code rendering function
        let htmlCodeRender = () => {
            let htmlEditorValue = htmlEditor.getValue();
            outputBody.innerHTML = htmlEditorValue;
        }

        htmlEditor.addEventListener('change', () => {
            htmlCodeRender();
        })
    };
    runHtml();


    let runCss = () => {
        // this is for css editor
        const cssEditor = ace.edit(cssCode);
        cssEditor.getSession().setMode('ace/mode/css');
        cssEditor.setTheme('ace/theme/tomorrow_night')

        // create style element and push into body
        let styleTag = document.createElement('style');
        outputHead.appendChild(styleTag)


        // css code rendaring function
        let cssCodeRender = () => {
            let cssEditorValue = cssEditor.getValue();
            styleTag.innerHTML = cssEditorValue;
        }
        cssEditor.addEventListener('change',()=>{
            cssCodeRender()
        })
    }
    runCss();

    let runJs = ()=>{
        // this is for css editor
        const jsEditor = ace.edit(jsCode);
        jsEditor.getSession().setMode('ace/mode/javascript');
        jsEditor.setTheme('ace/theme/tomorrow_night');

        // // js code rendaring function
        // let jsRender = ()=>{
        //     let jsEditorValue = jsEditor.getValue();
        //     outputContentWindow.eval(jsEditorValue);
        // }

        // jsEditor.addEventListener('change',()=>{
        //     jsRender()
        // })

    }
    runJs();

})();