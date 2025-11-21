import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../constants';
import { ChatMessage } from '../types';
import { generateAIResponse } from '../services/geminiService';

interface AIPartnerProps {
  isOpen: boolean;
  toggle: () => void;
}

const AIPartner: React.FC<AIPartnerProps> = ({ isOpen, toggle }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Ready to lock up some properties? Paste an address or ask me about a negotiation strategy. I'm analyzing the market.",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    // Placeholder for the streaming response
    const botMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: botMsgId,
      role: 'model',
      text: '', // Start empty
      timestamp: Date.now(),
      isTyping: true
    }]);

    let fullResponseText = '';

    await generateAIResponse(
      messages.map(m => ({ role: m.role, text: m.text })), 
      userMsg.text,
      (chunk) => {
        fullResponseText += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === botMsgId 
            ? { ...msg, text: fullResponseText, isTyping: false }
            : msg
        ));
        scrollToBottom();
      }
    );

    setIsThinking(false);
  };

  return (
    <div 
      className={`fixed right-0 top-0 h-full bg-[#0f172a]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-all duration-500 ease-out z-50 flex flex-col font-sans
        ${isOpen ? 'w-[400px] translate-x-0' : 'w-[400px] translate-x-full pointer-events-none'}
      `}
    >
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between bg-indigo-900/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="text-white animate-pulse">{ICONS.Sparkles}</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0f172a]"></div>
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-lg leading-tight">AI Partner</h3>
            <p className="text-xs text-emerald-400 font-mono">ONLINE • GEMINI 3 PRO</p>
          </div>
        </div>
        <button onClick={toggle} className="text-gray-400 hover:text-white transition-colors">
          {ICONS.Close}
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-lg ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-tr-none' 
                  : 'glass-panel text-gray-200 rounded-tl-none border-l-2 border-purple-500'
              }`}
            >
              {msg.role === 'model' && !msg.text && msg.isTyping ? (
                 <div className="flex gap-1 h-5 items-center">
                   <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms'}}></div>
                   <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms'}}></div>
                   <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms'}}></div>
                 </div>
              ) : (
                <div className="whitespace-pre-wrap markdown-body">{msg.text}</div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10 bg-black/20">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about a property, stats, or strategy..."
            className="w-full glass-input rounded-xl py-3 pl-4 pr-12 text-sm placeholder-gray-500"
            disabled={isThinking}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
            <button className="text-gray-400 hover:text-indigo-400 transition-colors">
              {ICONS.Mic}
            </button>
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isThinking}
              className={`p-1.5 rounded-lg transition-all ${
                input.trim() ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'bg-gray-800 text-gray-600'
              }`}
            >
              {ICONS.Send}
            </button>
          </div>
        </div>
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
           {['Analyze 123 Main St', 'Draft LOI for Subto', 'Comp check'].map(s => (
             <button 
               key={s} 
               onClick={() => setInput(s)}
               className="text-xs whitespace-nowrap px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 transition-colors"
             >
               {s}
             </button>
           ))}
        </div>
      </div>
    </div>
  );
};

export default AIPartner;
