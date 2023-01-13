const handleTextChanged = (e: React.ChangeEvent) {
    const target = e.target as HTMLTextAreaElement;
    if (target.value != null) setText(target.value);
  }

  const handleKeyUp =(e: React.KeyboardEvent) {
    if (e.code === "Enter") {
      setItems([...items, { text: text, done: false, dateAdded: new Date() }]);
      setText("");
    }
  }

  const toggleDone = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = Number(e.currentTarget.id);
    const item = items[id];
    if (item != null) {
      item.done = !item.done;
      items[id] = item;
      setItems([...items]);
    }
  };

  export {handleKeyUp, handleTextChanged, toggleDone};