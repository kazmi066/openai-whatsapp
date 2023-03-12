import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import { Spinner } from './components/spinner';
import { ReactComponent as SendIcon } from './assets/sendIcon.svg';

const configuration = new Configuration({
  apiKey: `${process.env.REACT_APP_OPENAI_KEY}`
});

const openai = new OpenAIApi(configuration);

function App() {
  const [searchText, setSearchText] = useState('');
  const [botMessages, setBotMessages] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    setLoader(true);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: searchText,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });

    setLoader(false);
    setSearchText('');
    setBotMessages([...botMessages, response.data.choices[0].text]);
  };

  return (
    <main className='overflow-hidden'>
      <div className="flex h-screen">
        <Sidebar />
        <section className='w-full flex flex-col justify-between'>
          <Header />
          <div className="flex-1 h-screen min-h-0 bg-[#0b141a]">
            <div className='w-11/12 mx-auto h-full overflow-y-scroll pt-4 pb-24'>
              {botMessages.map((message, index) => (
                <div dangerouslySetInnerHTML={{ __html: message }} className={`text-white bg-secondary p-2 mb-1 ${message.isUser ? 'user' : 'bot'}`} key={index}>
                </div>
              ))}
              {loader && <Spinner />}
            </div>
            <div className='py-3 bg-secondary px-4 sticky bottom-0'>
              <form className="flex items-center justify-between gap-4 text-[#aebac1]"
                onSubmit={handleSendMessage}>
                <input
                  autoComplete='off'
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  className='text-[15px] w-full border-[1px] border-[#2a3942] bg-secondary py-3 px-4 outline-none'
                  type="text"
                  name="message"
                  placeholder="Type a message" />
                <SendIcon />
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
