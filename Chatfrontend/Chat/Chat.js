<html>

<head>
    <title> Chat Room </title>

    <style>
        * {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }
        
        .header-area {
            height: 6%;
            background: rgb(0 102 51);
            box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);
            color: rgb(255, 255, 255);
            padding: 4px;
        }
        
        .message-area {
            height: 80%;
            padding: 3px;
            overflow: auto;
        }
        
        .typing-area {
            margin-top: 4px;
            padding: 4px;
            height: 8%;
        }
        
        .typing-box {
            width: 90%;
            height: 100%;
            resize: none;
            padding: 3px;
        }
        
        .send-button {
            border: 0;
            width: 9%;
            background: rgb(0 102 51);
            color: white;
            padding: 8px;
            font-size: 18px;
            position: absolute;
            margin: 8px;
        }
        
        .message-box {
            margin-top: 10px;
        }
        
        .others-message-box {}
        
        .my-message-box {
            text-align: right;
            background: white;
        }
        
        .message {
            max-width: 70%;
            border-radius: 5%;
            padding: 5px;
            box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);
        }
        
        .my-message {
            float: right;
            background: rgb(0 102 51);
            color: white;
        }
        
        .others-message {
            float: left;
            background: white;
        }
        
        .separator {
            width: 100%;
            height: 8px;
            float: left;
        }
    </style>
</head>

<body>

    <div class="header-area">
        <h1> Chat2Chat </h1>
    </div>

    <div class="message-area" id="message-area">
        <!-- <div class="message-box others-message-box">
				<div class="message others-message"> Hi, How are you? </div>
				<div class="separator"></div>
			</div>
			
			<div class="message-box my-message-box">
				<div class="message my-message"> I am good, how are you doing? </div>
				<div class="separator"></div>
			</div> -->
    </div>

    <div class="typing-area">
        <textarea class="typing-box" id="typing-box"></textarea>
        <button class="send-button" onclick="sendMessage()"> Send </button>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js" integrity="sha512-v8ng/uGxkge3d1IJuEo6dJP8JViyvms0cly9pnbfRxT6/31c3dRWxIiwGnMSWwZjHKOuY3EVmijs7k1jz/9bLA==" crossorigin="anonymous"></script>
    <script>
        var socket;
        window.onload = function() {

            socket = io.connect('http://localhost:3000');

            socket.on('message-from-others', function(message) {
                var html = '<div class="message-box others-message-box">' +
                    '<div class="message others-message"> ' + message + ' </div>' +
                    '<div class="separator"></div>' +
                    '</div>';

                document.getElementById("message-area").innerHTML += html;
            })
        }

        function sendMessage() {
            var message = document.getElementById("typing-box").value;
            var html = '<div class="message-box my-message-box">' +
                '<div class="message my-message"> ' + message + ' </div>' +
                '<div class="separator"></div>' +
                '</div>';

            document.getElementById("message-area").innerHTML += html;
            document.getElementById("typing-box").value = "";

            socket.emit('codeboard-message', message);
        }
    </script>
</body>
</html>


