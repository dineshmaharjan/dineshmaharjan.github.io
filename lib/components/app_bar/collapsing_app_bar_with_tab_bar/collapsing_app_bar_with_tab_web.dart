import 'package:flutter/material.dart';

class CollapsingAppBarWithTabWeb extends StatelessWidget {
  const CollapsingAppBarWithTabWeb({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: DefaultTabController(
        length: 3,
        child: NestedScrollView(
            headerSliverBuilder: (context, value) {
              return [
                const SliverAppBar(
                  floating: true,
                  pinned: true,
                  title: Text('Collapsing App bar with Tab bar'),
                  expandedHeight: 200,
                  bottom: TabBar(tabs: [
                    Tab(
                      text: 'Tab 1',
                    ),
                    Tab(
                      text: 'Tab 2',
                    ),
                    Tab(
                      text: 'Tab 3',
                    ),
                  ]),
                )
              ];
            },
            body: TabBarView(children: [
              ListView.builder(
                  itemCount: 50,
                  itemBuilder: (context, index) {
                    return Text("Item $index");
                  }),
              ListView.builder(
                  itemCount: 50,
                  itemBuilder: (context, index) {
                    return Text("Item $index");
                  }),
              ListView.builder(
                  itemCount: 50,
                  itemBuilder: (context, index) {
                    return Text("Item $index");
                  }),
            ])),
      ),
    );
  }
}
