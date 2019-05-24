import React from "react";

import { View, Text, Button } from "react-native";

import { connect } from "react-redux";

const TodoFit = ({ todos, dispatch }) => (
    <View
        style={{ flex: 1, backgroundColor: "#FFF", justifyContent: "center" }}
    >
        {todos.map(todo => (
            <Text
                onPress={() =>
                    dispatch({ type: "MARK_AS_COMPLETED", id: todo.id })
                }
                style={{
                    textDecorationLine: todo.completed ? "line-through" : "none"
                }}
                key={todo.id}
            >
                {todo.text}
            </Text>
        ))}
        <Button
            onPress={() =>
                dispatch({ type: "ADD_TODO", text: "Adicionar Todo" })
            }
            title="Adicionar Todo"
        />
    </View>
);

const mapStateToProps = state => ({
    todos: state
});

export default connect(mapStateToProps)(TodoFit);
