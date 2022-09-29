import React from 'react';
import './Question.css'

const Question = () => {
    return (

        <div className="question-container">
            <div className='w-10/12 mx-auto'>
            <div className="dropdown">
            <label tabIndex={0} className="btn m-1 bg-primary">React কি এবং এটি কিভাবে কাজ করে?</label>
            <div tabIndex={0} className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                <div className="card-body">
                <p>React হল ইউজার ইন্টারফেস তৈরির জন্য একটি ঘোষণামূলক, দক্ষ এবং নমনীয় জাভাস্ক্রিপ্ট লাইব্রেরি। 'V' MVC-তে ভিউ বোঝায়। ReactJS হল একটি ওপেন সোর্স, কম্পোনেন্ট-ভিত্তিক ফ্রন্ট এন্ড লাইব্রেরি যা শুধুমাত্র অ্যাপ্লিকেশনটির ভিউ লেয়ারের জন্য দায়ী। এটি ফেসবুক দ্বারা রক্ষণাবেক্ষণ করা হয়। ReactJS UI কে উপাদান হিসাবে পরিচিত কোডের বিচ্ছিন্ন পুনঃব্যবহারযোগ্য টুকরোগুলিতে ভাগ করে। প্রতিক্রিয়া উপাদানগুলি জাভাস্ক্রিপ্ট ফাংশনের অনুরূপভাবে কাজ করে কারণ তারা বৈশিষ্ট্য বা প্রপস নামক নির্বিচারে ইনপুট গ্রহণ করে। আপনার বিশৃঙ্খলতা ছাড়াই প্রয়োজনীয় হিসাবে অনেকগুলি উপাদান থাকা সম্ভব</p>
                </div>
            </div>
            </div>
            <div className="dropdown">
            <label tabIndex={0} className="btn m-1 bg-primary">Props এবং State মধ্যে পার্থক্য কি ?</label>
            <div tabIndex={0} className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                <div className="card-body">
                <p>প্রপগুলি এক উপাদান থেকে অন্য উপাদানে ডেটা প্রেরণ করতে ব্যবহৃত হয়। রাজ্য হল একটি স্থানীয় ডেটা সঞ্চয়স্থান যা শুধুমাত্র উপাদানগুলির জন্য স্থানীয় এবং অন্যান্য উপাদানগুলিতে প্রেরণ করা যায় না। সহজ কথায়, রাজ্য হল কম্পোনেন্টের স্থানীয় অবস্থা যা কম্পোনেন্টের বাইরে অ্যাক্সেস এবং পরিবর্তন করা যায় না। এটি একটি ফাংশনে স্থানীয় ভেরিয়েবলের সমতুল্য। এই. setState সম্পত্তি উপাদানের রাষ্ট্র মান আপডেট করতে ব্যবহার করা হয় প্রপস, উপাদানগুলিকে প্রপ আকারে তাদের মূল উপাদান থেকে ডেটা গ্রহণ করার ক্ষমতা দিয়ে উপাদানগুলিকে পুনরায় ব্যবহারযোগ্য করে তোলে।</p>
                </div>
            </div>
            </div>
            <div className="dropdown">
            <label tabIndex={0} className="btn m-1 bg-primary">ডাটালোড করা ছারা  useEffect  দিয়ে অার কি কি করা যায় ?</label>
            <div tabIndex={0} className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                <div className="card-body">
                <div>
                   <ol>
                   <li>API ডেটা আনতে ব্যবহৃত হয়</li>
                   <li>state পরিবর্তনের উপর চলমান: ইনপুট ক্ষেত্র যাচাই করতে ব্যবহৃত হয়</li>
                   <li>state পরিবর্তনের উপর চলছে: লাইভ ফিল্টারিং</li>
                   <li>state পরিবর্তনের উপর চলছে: নতুন অ্যারে মানতে অ্যানিমেশন ট্রিগার করুন</li>
                   <li>Props পরিবর্তনে চলমান: আনা এপিআই ডেটা আপডেটে করতে ব্যবহৃত হয়</li>
                   <li>props পরিবর্তনের উপর চলমান: BTC আপডেট করা মূল্য পেতে আনা API ডেটা আপডেট করা ব্যবহৃত হয়</li>
                   </ol>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Question;