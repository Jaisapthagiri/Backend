import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

const Chat = () => {
    const { fetchUsers } = useAuth();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-zinc-900">
            <Sidebar />
            <ChatWindow />
        </div>
    );
};

export default Chat;
